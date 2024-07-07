import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleUser } from "../../../../store/singleUser/singleUserSlice";
import { fetchPatchUserSocialInfo } from "../../../../store/singleUser/API";
import { useNavigate } from "react-router-dom";

const SettingsChangeInfo = () => {
    const { singleUser } = useSelector(selectSingleUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <section className="change_po_main">
            <h2>Personal information</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const {
                        firstName: { value: firstName },
                        lastName: { value: lastName },
                        email: { value: email },
                        nickname: { value: nickname },
                        country: { value: country },
                    } = e.target;
                    const newObj = {
                        firstName,
                        lastName,
                        nickname,
                        email,
                        country,
                    };
                    dispatch(
                        fetchPatchUserSocialInfo({
                            data: {
                                personalInfoChangable: {
                                    ...newObj,
                                },
                            },
                            id: singleUser[0]?.id,
                        })
                    );
                    navigate("/");
                }}
            >
                <label>
                    <p>First Name</p>
                    <input
                        type="text"
                        name="firstName"
                        defaultValue={singleUser[0]?.personalInfoChangable?.firstName}
                    />
                </label>
                <label>
                    <p>Last Name</p>
                    <input
                        type="text"
                        name="lastName"
                        defaultValue={singleUser[0]?.personalInfoChangable?.lastName}
                    />
                </label>
                <label>
                    <p>Nickname</p>
                    <input
                        name="nickname"
                        type="text"
                        defaultValue={singleUser[0]?.personalInfoChangable?.nickname}
                    />
                </label>
                <label>
                    <p>Email</p>
                    <input
                        name="email"
                        type="text"
                        defaultValue={singleUser[0]?.personalInfoChangable?.email}
                    />
                </label>
                <label>
                    <p>Country</p>
                    <input
                        name="country"
                        type="text"
                        defaultValue={singleUser[0]?.personalInfoChangable?.country}
                    />
                </label>

                <button>Save Changes</button>
            </form>
        </section>
    );
};

export default SettingsChangeInfo;
