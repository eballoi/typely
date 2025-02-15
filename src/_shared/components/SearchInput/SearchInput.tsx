import { FC } from "react";
import { SearchInputProps } from "./types";
import { Search } from "lucide-react";

export const SearchInput: FC<SearchInputProps> = ({
	value,
	onChange,
	onSearch,
}) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				width: "100%",
				border: "1px solid #ddd",
				borderRadius: 25,
				padding: 5,
				background: "#fff",
			}}
		>
			<input
				type="text"
				placeholder="Type to search..."
				value={value}
				onChange={onChange}
				onFocus={onChange}
				style={{
					flex: 1,
					padding: 10,
					fontSize: 16,
					border: "none",
					outline: "none",
					borderRadius: 25,
				}}
			/>
			<button
				onClick={onSearch}
				style={{
					padding: 10,
					fontSize: 16,
					border: "none",
					backgroundColor: "#41ead4",
					color: "#fff",
					cursor: "pointer",
					borderRadius: "50px",
				}}
				onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
				onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
			>
				<Search size={18} />
			</button>
		</div>
	);
};
