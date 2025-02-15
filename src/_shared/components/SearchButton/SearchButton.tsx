import { Send } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";

export const SearchButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			className="p-2 bg-slate-800 rounded-full text-white hover:opacity-80"
		>
			<Send />
		</button>
	);
};
