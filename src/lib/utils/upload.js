import path from "path";
import { existsSync, mkdirSync } from "fs";
import fs from "fs/promises";
import dayjs from "dayjs";

const uploadBasePath = path.join(process.cwd(), "uploads");
/**
 * Takes in a file object, upload the file then returns the file path
 * @param {File | FormDataEntryValue | null | * } image
 * @returns {Promise<string>}
 */
export async function uploadFile(image) {
	// If folder does not exists, create the folder before uploading the file
	if (!existsSync(uploadBasePath)) mkdirSync(uploadBasePath);
	const filePath = path.join(
		process.cwd(),
		"uploads",
		`${dayjs(new Date()).format("YYYYMMDD-HHmmssSSS")}.${image?.type.split("/")[1]}`
	);

	await fs.writeFile(filePath, Buffer.from(await image.arrayBuffer()));

	return String(filePath.split("/").at(-1));
}
