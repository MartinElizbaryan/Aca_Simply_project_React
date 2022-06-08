import AppColors from "../../Constants/ConstantColors/AppColors.js";

const styles = {
  root: {
    background: AppColors.white,
    color: "red",
    borderRadius: 12,
    marginRight: 20,
    width: "60%",
  },
  whiteColor: {
    color: AppColors.white,
  },
  searchButton: {
    color: "#fff",
    background: AppColors.blue,
    width: 255,
    height: 50,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  center2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: 'rgba(97, 97, 97, 0.9)',
    padding: 5,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99999,
  },
  centerText: {
    color: AppColors.white,
    textAlign: "center",
  },
  avatar: {
    height: 30,
    borderRadius: 50,
    border: '1px solid'
  },

};

export default styles;