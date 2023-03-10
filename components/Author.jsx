import React from 'react';
import Image from 'next/image';


const Author = ({ author }) => (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
        <div className="absolute left-0 right-0 -top-12">
            <div className="grid gird-cols-1 justify-items-center">
                <Image
                    unoptimized
                    alt={author.name}
                    height={110}
                    width={110}
                    className="align-middle rounded-full"
                    src={author.photo.url}
                />
            </div>
        </div>
        <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
        <p className="text-white text-ls">{author.bio}</p>
    </div>
);

export default Author;