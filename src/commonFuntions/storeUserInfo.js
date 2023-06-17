import { toast } from "react-hot-toast";

const uploadUserInfo = (storeUserInfo) => {
  fetch(`http://localhost:5000/store/user/info?email=${storeUserInfo.email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(storeUserInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        toast.success(`Wellcome ${storeUserInfo.name} to our familly`);
      }
    });
};
export default uploadUserInfo;
