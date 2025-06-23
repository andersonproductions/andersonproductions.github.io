use image::{load_from_memory, DynamicImage, ImageResult};
use rusqlite::{fallible_streaming_iterator::FallibleStreamingIterator, params, Connection, Row};
const OUTPUT_PATH: &str = "../../static/assets";
const DB_PATH: &str = "../../db.lite";
const IMAGE_STYLES_CONFIG_PATH: &str = "/ImageStyles.toml";

fn main() {
    let db_connection = Connection::open(DB_PATH).unwrap();

    let mut stmt = db_connection
        .prepare(
            "SELECT i.*,m.* FROM images AS i LEFT JOIN metadata AS m ON i.id = m.linkedImage LEFT JOIN tti AS tti ON i.id = tti.imageId LEFT JOIN tags AS t ON tti.tagId = t.id;",
        )
        .unwrap();
    let rows = stmt.query_map([], map_row).unwrap().map(|row| row.unwrap());
}

fn map_row(row: &Row) -> Result<(String, Vec<u8>), rusqlite::Error> {
    let id: String = row.get("id").unwrap();
    let file_data: Vec<u8> = row.get("fileData").unwrap();
    return Ok((id, file_data));
}
struct ImageStyle {
    name: String,
    sys_name: String,
    width: Option<i16>,
    height: Option<i16>,
    effect: ImageStyleEffect,
    compression: Option<i8>,
    mimes: Vec<String>,
    focal_point_crop: bool,
}

enum ImageStyleEffect {
    scale_crop,
}

fn load_from_db(blob: &[u8]) -> ImageResult<DynamicImage> {
    return load_from_memory(blob);
}
