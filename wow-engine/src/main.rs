use tower_http::cors::CorsLayer;
use tower_http::trace::TraceLayer;
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    // Initialize tracing subscriber
    tracing_subscriber::fmt::init();

    // Load environment variables from .env file
    dotenvy::dotenv().ok();

    // 1. Initialize API router with CORS enabled for seamless frontend calls
    let app = wow_engine::api::create_router()
        .layer(CorsLayer::permissive())
        .layer(TraceLayer::new_for_http());

    // 2. Bind TCP listener on configured port or fallback to 8080
    let port: u16 = std::env::var("PORT")
        .ok()
        .and_then(|p| p.parse().ok())
        .unwrap_or(8080);
    let addr = SocketAddr::from(([127, 0, 0, 1], port));
    let listener = tokio::net::TcpListener::bind(addr).await.expect("Failed to bind to socket address");
    
    tracing::info!("Wow Engine is booting up and routing pipeline conversions...");
    tracing::info!("   Listening on: http://{}", addr);
    tracing::info!("   Endpoints available:");
    tracing::info!("     - GET  /api/v1/health          (Health Check)");
    tracing::info!("     - POST /api/v1/quote           (Quoting Pathfinder)");
    tracing::info!("     - POST /api/v1/anchor/deposit  (SEP-24 Deposit Anchor / On-ramp)");
    tracing::info!("     - POST /api/v1/anchor/withdraw (SEP-24 Withdraw Anchor / Off-ramp)");
    tracing::info!("     - POST /api/v1/anchor/quote    (SEP-38 Anchor Quotes)");

    // 3. Serve incoming TCP requests through Axum pipeline
    axum::serve(listener, app).await.expect("Failed to run Axum server");
}
