export interface Comment {
	id: number;
	name: string;
	body: string;
	email: string;
}

export interface SearchPageProps {
	initialResults: Comment[];
}
