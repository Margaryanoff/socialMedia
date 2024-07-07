import * as Yup from "yup";
import userImg from "../../src/images/userimg.avif";
import bckgd from "../../src/images/bckgd.jpg";
const year = new Date().getFullYear().toFixed(0);
const month = new Date().getMonth().toFixed(0);
const day = new Date().getDate().toFixed(0);

export const initialValuesRegister = {
    id: Date.now().toString(),
    firstName: "",
    lastName: "",
    age: "",
    nickname: "",
    password: "",
    gender: "",
    email: "",
    phone: "",
    bio: "",
    birthdayDate: "",
    profileImg: userImg,
    bgImg: bckgd,
    loginDate: `${year}-${month}-${day}`,
    personalInfo: { city: "", school: "", company: "", position: "" },
    followers: [
        {
            followerId: "",
            followerDate: "",
        },
    ],
    followRequests: [
        {
            reqImg: "",
            reqNickname: "",
        },
    ],
    following: [
        {
            followingPersonId: "",
        },
    ],
    posts: [
        {
            id: "",
            userId: "",
            postImg: "",
            postTitle: "",
            postLikes: "",
        },
    ],
    interests: ["", "", ""],
    likedPosts: [
        {
            postId: "",
            postTitle: "",
            postImg: "",
            postedUser: "",
        },
    ],
};

export const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, "Min 3 letters")
        .max(20, "Max 20 letters")
        .required("Required"),
    lastName: Yup.string()
        .min(3, "Min 3 letters")
        .max(20, "Max 20 letters")
        .required("Required"),
    age: Yup.string("Should not contain letters/symbols")
        .max(2, "Over 100 Years? Lucky guy huh?")
        .required("Required"),
    email: Yup.string().email("Not valid email").required("Required"),
    phone: Yup.string().required("Required"),
    nickname: Yup.string()
        .min(4, "Min 4 letters")
        .max(20, "Max 20 letters")
        .required("Required"),
    password: Yup.string()
        .min(4, "Min 4 letters")
        .max(20, "Max 20 letters")
        .required("Required"),
});
