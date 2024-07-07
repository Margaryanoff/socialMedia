import React from "react";
import userImg from "../../../images/userimg.avif";
const birthdays = [
    { id: 1, nickname: "John", birthdayDate: "30-06-24" },
    { id: 2, nickname: "Jack", birthdayDate: "3-07-24" },
];

const UPMUpcomingBirthdays = () => {
    return (
        <div className="UPMUpcomingBirthdays">
            <h2>Upcoming Birthdays</h2>
            <div className="birthday_users_cards">
                {birthdays.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>
                                <img src={userImg} alt="" />
                                <h2>@{user.nickname}</h2>
                            </div>
                            <strong>{user.birthdayDate}</strong>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UPMUpcomingBirthdays;
