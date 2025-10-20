import React from "react";
import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        total_view,
        rating,
        tags,
    } = news;

    return (
        <div className="card w-full bg-base-100 shadow-md border border-gray-200 hover:shadow-lg transition">
            {/* Author Section */}
            <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center space-x-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold text-sm">{author.name}</h3>
                        <p className="text-xs text-gray-500">
                            {new Date(author.published_date).toLocaleDateString("en-GB")}
                        </p>
                    </div>
                </div>
                <div  className="text-gray-500 cursor-pointer hover:text-primary flex gap-3" >
                    <FaRegBookmark />
                    <FaShareAlt/>
                </div>
            </div>

            {/* Title */}
            <div className="px-4 pt-2">
                <h2 className="font-bold text-lg text-gray-800 leading-snug hover:text-primary cursor-pointer">
                    {title}
                </h2>
            </div>

            {/* Thumbnail */}
            <figure className="px-4 pt-3">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="rounded-lg w-full object-cover"
                />
            </figure>

            {/* Details */}
            <div className="px-4 py-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                    {details.length > 200 ? details.slice(0, 200) + "..." : details}
                </p>

                <div className="mt-2 text-sm text-primary font-medium cursor-pointer hover:underline">
                    Read More
                </div>

                {/* Tags */}
                <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge badge-outline badge-sm text-gray-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-4 pb-4 border-t pt-2 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold">{rating.number.toFixed(1)}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
