import { Swiper, SwiperSlide } from "swiper/react";
import "./UserPageStorys.css";
import "swiper/css";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/users/usersSlice";
import { selectSingleUser } from "../../store/singleUser/singleUserSlice";

const UserStory = () => {
    const { dataUsers } = useSelector(selectUsers);
    const { singleUser } = useSelector(selectSingleUser);
    return (
        <Swiper
            className="user_story"
            spaceBetween={0}
            slidesPerView={6}
            onSlideChange={() => {}}
            onSwiper={() => {}}
        >
            <SwiperSlide>
                <div className="login_user_story">
                    <p>+</p>
                    <div
                        className="story_img"
                        style={{
                            backgroundImage: `url(${singleUser[0].profileImage})`,
                            width: "80px",
                            height: "80px",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            border: "3px solid blue",
                            borderRadius: "50px",
                        }}
                    ></div>
                    <h2>Add Story</h2>
                </div>
            </SwiperSlide>

            {dataUsers?.map((user) => {
                return (
                    <SwiperSlide key={user.id + Math.random()}>
                        <div className="each_story">
                            <div
                                className="story_img"
                                style={{
                                    backgroundImage: `url(${user.profileImage})`,
                                    width: "80px",
                                    height: "80px",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    border: "3px solid blue",
                                    borderRadius: "50px",
                                }}
                            ></div>
                            <h2 className="user_nickname">
                                {user?.personalInfoChangable?.nickname}
                            </h2>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default UserStory;
