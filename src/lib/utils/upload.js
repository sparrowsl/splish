import path from "path";
import fs from "fs";
import dayjs from "dayjs";

const uploadBasePath = path.join(process.cwd(), "uploads");
/**
 * Takes in a file object, upload the file then returns the file name
 * @param {File | FormDataEntryValue | null | * } image
 * @returns {Promise<string>}
 */
export async function uploadFile(image) {
	// If folder does not exists, create the folder before uploading the file
	if (!fs.existsSync(uploadBasePath)) fs.mkdirSync(uploadBasePath);

	const filePath = path.join(
		process.cwd(),
		"uploads",
		`${dayjs(new Date()).format("YYYYMMDD-HHmmssSSS")}.${image?.type.split("/")[1]}`
	);

	fs.writeFileSync(filePath, Buffer.from(await image.arrayBuffer()));

	return String(filePath.split("/").at(-1));
}
