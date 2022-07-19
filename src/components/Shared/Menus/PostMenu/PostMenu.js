import { IconButton, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { useState } from "react"
import PostCreatorEditMenu from "../PostCreatorEditMenu/PostCreatorEditMenu"
import { AlertDialog } from "../../Dialogs/AlertDialog/AlertDialog"
import PostAdminEditMenu from "../PostAdminEditMenu/PostAdminEditMenu"
import api from "../../../../api/api"
import { useNavigate, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function PostMenu({ post }) {
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const { t } = useTranslation()
  const { id } = useParams()

  const navigate = useNavigate()

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const deletePost = async () => {
    setOpenDeleteAlert(false)
    await api.delete(`/posts/${id}`)
    navigate("/profile/my-posts")
  }

  return (
    <>
      <IconButton onClick={handleMenuClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <PostCreatorEditMenu post={post} handleMenuClose={handleMenuClose} />
        <PostAdminEditMenu post={post} handleMenuClose={handleMenuClose} />
        <MenuItem
          onClick={() => {
            // handleMenuClose()
            setOpenDeleteAlert(true)
          }}
        >
          {t("Delete")}
        </MenuItem>
      </Menu>
      <AlertDialog
        open={openDeleteAlert}
        title={t("Are_you_sure")}
        message={t("Delete_message")}
        handleClose={() => {
          setOpenDeleteAlert(false)
          handleMenuClose()
        }}
        handleOk={deletePost}
      />
    </>
  )
}
