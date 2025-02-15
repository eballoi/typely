import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "GET") {
		return res.status(405).json({ error: "Method not allowed" });
	}

	const { q } = req.query;

	if (!q || typeof q !== "string") {
		return res.status(400).json({ error: "Query parameter 'q' is required" });
	}

	try {
		const response = await fetch(`${process.env.API_BASE_URL}/comments?q=${q}`);
		const data = await response.json();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error: `Failed to fetch data: ${error}` });
	}
}
