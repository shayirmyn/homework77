import React, { useEffect } from 'react';
import {selectFetchAllLoading, selectPosts} from "../store/articlesSlice";
import {fetchPosts} from "../store/articlesThunks";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import Spinner from "../components/Spinner/Spinner";
import CardForArticle from "../components/CardForPost/CardForArticle";
import {Post} from "../types";

const Articles = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(selectPosts);
    const fetchAllLoading = useAppSelector(selectFetchAllLoading);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    let info;

    if (fetchAllLoading) {
        info = <Spinner/>
    } else {
        info = (
            <>
                {posts.map((post: Post) => (
                    <CardForArticle key={post.id} author={post.author} message={post.message} image={post.image}/>
                ))}
            </>
        )
    }

    return (

        <div>
            {info}
        </div>
    );
};

export default Articles;