import { Box } from "@mui/material";

const UserAvatar = ({ image, size = "75px" }) => {
  return (
    <Box width={size} height={size}>
      <img
      className="img"
        style={{ objectFit: "cover",  borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://i.pinimg.com/564x/f5/1d/0a/f51d0a59def3381376fbbb99fb7c4825.jpg`}
      />
    </Box>
  );
};

export default UserAvatar;
