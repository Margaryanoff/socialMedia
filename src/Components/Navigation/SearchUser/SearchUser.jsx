import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SearchUser.css";

function SearchUser() {
    const { id } = useParams();
    const [interestingUser, setInterestingUser] = useState({});

    useEffect(() => {
        const get = async () => {
            const result = await fetch(`http://localhost:8080/users/${id}`);
            const jsonResult = await result.json();
            setInterestingUser(jsonResult);
        };
        get();
    }, [id]);

    return (
        <div className="search_user">
            <div className="each-search-user">
                <div
                    className="different_users_bg"
                    style={{ backgroundImage: `url(${interestingUser.bgImage})` }}
                ></div>
                <div
                    className="different_users_profImg"
                    style={{ backgroundImage: `url(${interestingUser.profileImage})` }}
                ></div>
                <h1>{interestingUser?.nickname}</h1>
                <div className="info_search_user">
                    <p>Posts ({interestingUser?.posts?.length})</p>
                    <p>Followers ({interestingUser?.followers?.length})</p>
                    <p>Following ({interestingUser?.following?.length})</p>
                </div>
                <div className="search_users_posts">
                    {interestingUser?.posts?.map((user) => {
                        return (
                            <div className="each_post" key={user.id}>
                                <div className="info_each_search_user">
                                    <div
                                        className="info_user_post_logo"
                                        style={{
                                            backgroundImage: `url(${interestingUser?.profileImage})`,
                                        }}
                                    ></div>
                                    <div className="name_search_user">
                                        <p>{user?.time}</p>
                                        <p>{interestingUser?.nickname}</p>
                                    </div>
                                </div>
                                <p>{user?.title}</p>
                                <div
                                    className="info_user_post_img"
                                    style={{ backgroundImage: `url(${user?.postImg})` }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SearchUser;
