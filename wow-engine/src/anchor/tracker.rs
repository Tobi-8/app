use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::{OnceLock, RwLock};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Transaction {
    pub id: String,
    pub status: String,
    pub asset_code: String,
    pub account: String,
    pub amount_in: Option<String>,
    pub amount_out: Option<String>,
}

static TX_STORE: OnceLock<RwLock<HashMap<String, Transaction>>> = OnceLock::new();

pub fn get_tx_store() -> &'static RwLock<HashMap<String, Transaction>> {
    TX_STORE.get_or_init(|| RwLock::new(HashMap::new()))
}

pub fn insert_transaction(tx: Transaction) {
    if let Ok(mut store) = get_tx_store().write() {
        store.insert(tx.id.clone(), tx);
    }
}

pub fn get_transaction(id: &str) -> Option<Transaction> {
    if let Ok(store) = get_tx_store().read() {
        store.get(id).cloned()
    } else {
        None
    }
}
