// React Component!
// Follow <-> following
function FollowButton() {
  const [following, setFollowing] = React.useState(false);

  const commonBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "250px",
    right: "16px",
    width: "100px",
    heigth: "36px",
    borderRadius: "9999px",
    fontWeight: "bold",
  };

  const followBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "black",
    color: "white",
  };

  const followingBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "white",
    color: "black",
    border: "1px solid #cfd9de",
  };

  return React.createElement(
    "div",
    {
      onClick: () => setFollowing(!following),
      style: following ? followingBtnStyle : followBtnStyle,
    },
    following ? "Following" : "Follow"
  );
}

const domContainer = document.querySelector("#follow_button_container");
ReactDOM.render(React.createElement(FollowButton), domContainer);
