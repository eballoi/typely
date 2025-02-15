import { FC } from "react";
import { CommentsListProps } from "./types";
import { NoResults } from "../NoResults";

export const CommentsList: FC<CommentsListProps> = ({ comments }) => {
	if (comments.length === 0) {
		return <NoResults />;
	}
	return (
		<ul className="space-y-4">
			{comments.map((item) => (
				<li
					key={item.id}
					className="comment-item flex gap-4 bg-white p-4 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
				>
					<div className="flex-1">
						<div className="flex justify-between items-center">
							<strong className="text-gray-900 text-md">{item.name}</strong>
							<span className="text-sm text-gray-500">{item.email}</span>
						</div>
						<p className="mt-2 text-gray-700 text-sm">{item.body}</p>
					</div>
				</li>
			))}
		</ul>
	);
};
