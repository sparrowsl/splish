import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";
import sharp from "sharp";

const uploadPath = path.join(process.cwd(), "uploads");

/**
 * Takes in a file object, upload the file then returns the file name
 * @param {File | FormDataEntryValue | null | any } image
 * @returns {Promise<string>}
 */
export async function uploadFile(image) {
	// If folder does not exists, create the folder before uploading the file
	if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);

	const filePath = `${uploadPath}/${nanoid()}.webp`;
	try {
		await sharp(await image.arrayBuffer())
			.resize({ width: 400, height: 350 })
			.webp()
			.toFile(filePath);
	} catch (error) {
		console.log(error);
	}

	return String(filePath.split("/").at(-1));
}
