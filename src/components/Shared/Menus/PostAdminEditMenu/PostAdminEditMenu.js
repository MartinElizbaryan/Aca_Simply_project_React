import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { IconButton, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import EditPost from "../../../EditPost/EditPost"
import { AlertDialog } from "../../Dialogs/AlertDialog/AlertDialog"
import api from "../../../../api/api"
import { withPostCreatorChecking } from "../../../../hocs/withPostCreatorChecking"

function PostAdminEditMenu({ post, ...props }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [openCompleteAlert, setOpenCompleteAlert] = useState(false)
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false)
  const [openEditPost, setOpenEditPost] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate()

  const toggleOpenEditPost = (open) => {
    setOpenEditPost(open)
  }

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

  const changeCompleted = async () => {
    setOpenDeleteAlert(false)
    const res = await api.patch(`/posts/completed/${post.id}`)
    navigate("/profile/my-posts")
  }

  return (
    <>
      <IconButton onClick={handleMenuClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem
          onClick={() => {
            setAnchorEl(null)
            setOpenEditPost(true)
          }}
        >
          {t("Edit")}
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null)
            setOpenCompleteAlert(true)
          }}
        >
          {t("Complete")}
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null)
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
        handleClose={() => setOpenDeleteAlert(false)}
        handleOk={deletePost}
      />
      <AlertDialog
        open={openCompleteAlert}
        title={t("Are_you_sure")}
        message={t("Complete_message")}
        handleClose={() => setOpenDeleteAlert(false)}
        handleOk={changeCompleted}
      />
      <EditPost post={post} open={openEditPost} toggleOpen={toggleOpenEditPost} />
    </>
  )
}

export default withPostCreatorChecking(PostAdminEditMenu)
