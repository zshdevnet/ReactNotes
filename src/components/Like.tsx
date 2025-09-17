import { useState } from "react";
import { IoHeart} from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";



const Like = () => {
    const [like, unLike] = useState(true);

    if (like)
        return (
            <IoHeart color="#ff6b81" size={50} onClick={() => unLike(false)} />
        );
    else
        return(
            <IoMdHeartEmpty size={50} onClick={() => unLike(true)}/>
    );
}

export default Like;