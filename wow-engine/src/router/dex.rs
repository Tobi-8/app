use crate::bridge::Chain;

#[derive(Debug, Clone)]
pub struct DexQuote {
    pub provider: String,
    pub chain: Chain,
    pub source_asset: String,
    pub dest_asset: String,
    pub amount_in: u64,
    pub amount_out: u64,
    pub estimated_fee_usd: f64,
    pub duration_seconds: u64,
}

pub struct DexProvider;

impl DexProvider {
    pub fn get_swap_quote(
        chain: Chain,
        source_asset: &str,
        dest_asset: &str,
        amount_in: u64,
    ) -> Result<DexQuote, anyhow::Error> {
        let provider_name = match chain {
            Chain::Ethereum => "Uniswap",
            Chain::Solana => "Raydium",
            Chain::Arbitrum => "Camelot",
            Chain::Stellar => "Stellar DEX",
        };

        // Mock price oracle
        let get_price = |asset: &str| -> f64 {
            match asset.to_uppercase().as_str() {
                "ETH" => 3000.0,
                "SOL" => 150.0,
                "XLM" => 0.10,
                "USDC" => 1.0,
                _ => 1.0,
            }
        };

        let price_in = get_price(source_asset);
        let price_out = get_price(dest_asset);

        let value_usd = (amount_in as f64) * price_in;

        // Apply a 0.3% DEX LP fee
        let fee_usd = value_usd * 0.003;
        let value_after_fee = value_usd - fee_usd;

        let amount_out = (value_after_fee / price_out) as u64;

        Ok(DexQuote {
            provider: provider_name.to_string(),
            chain,
            source_asset: source_asset.to_string(),
            dest_asset: dest_asset.to_string(),
            amount_in,
            amount_out,
            estimated_fee_usd: fee_usd, 
            duration_seconds: 5,
        })
    }
}
