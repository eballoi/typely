import { CommentsList } from "@/_shared/components/CommentsList";
import { Footer } from "@/_shared/components/Footer";
import { Loading } from "@/_shared/components/Loading";
import { Navbar } from "@/_shared/components/Navbar/Navbar";
import { useSearch } from "@/_shared/hooks/useSearch";
import { SearchPageProps } from "@/_shared/types/core";
import { GetServerSideProps } from "next";

const SearchPage: React.FC<SearchPageProps> = ({ initialResults }) => {
	const {
		query,
		setQuery,
		results,
		suggestions,
		setSuggestions,
		loading,
		handleSearch,
	} = useSearch(initialResults);

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar
				query={query}
				setQuery={setQuery}
				handleSearch={handleSearch}
				suggestions={suggestions}
				setSuggestions={setSuggestions}
			/>
			<main className="pt-20 flex flex-1 container mx-auto p-4 h-full">
				<div className="p-8 max-w-2xl m-auto gap-4">
					{loading ? <Loading /> : <CommentsList comments={results} />}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const searchTerm = query.q || "";
	const res = await fetch(
		`${process.env.API_BASE_URL}/comments?q=${searchTerm}`
	);
	const data: Comment[] = await res.json();
	return { props: { initialResults: data.slice(0, 20) } };
};

export default SearchPage;
