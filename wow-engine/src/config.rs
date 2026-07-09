use serde::Deserialize;

#[derive(Deserialize, Debug, Clone)]
pub struct AppConfig {
    #[serde(default = "default_port")]
    pub port: u16,
    
    // Additional structured configuration fields can be added here
}

fn default_port() -> u16 {
    8080
}

impl AppConfig {
    pub fn load() -> Result<Self, envy::Error> {
        envy::from_env::<AppConfig>()
    }
}
