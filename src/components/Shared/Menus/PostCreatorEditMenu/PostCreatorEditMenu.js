import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { MenuItem } from "@mui/material"
import EditPost from "../../../EditPost/EditPost"
import { AlertDialog } from "../../Dialogs/AlertDialog/AlertDialog"
import api from "../../../../api/api"
import { withPostCreatorChecking } from "../../../../hocs/withPostCreatorChecking"

function PostCreatorEditMenu({ post, handleMenuClose, ...props }) {
  const [openCompleteAlert, setOpenCompleteAlert] = useState(false)
  const [openEditPost, setOpenEditPost] = useState(false)
  const { t } = useTranslation()
  const navigate = useNavigate()

  const toggleOpenEditPost = (open) => {
    setOpenEditPost(open)
  }

  const changeCompleted = async () => {
    setOpenCompleteAlert(false)
    await api.patch(`/posts/completed/${post.id}`)
    navigate("/profile/my-posts")
  }

  return (
    <>
      <MenuItem
        onClick={() => {
          setOpenEditPost(true)
        }}
      >
        {t("Edit")}
      </MenuItem>
      {post.trusted && post.confirmer_id && post.completed && (
        <MenuItem
          onClick={() => {
            setOpenCompleteAlert(true)
          }}
        >
          {t("Complete")}
        </MenuItem>
      )}
      <AlertDialog
        open={openCompleteAlert}
        title={t("Are_you_sure")}
        message={t("Complete_message")}
        handleClose={() => {
          setOpenCompleteAlert(false)
          handleMenuClose()
        }}
        handleOk={changeCompleted}
      />
      <EditPost
        post={post}
        open={openEditPost}
        toggleOpen={(open) => {
          toggleOpenEditPost(open)
          handleMenuClose()
        }}
      />
    </>
  )
}

export default withPostCreatorChecking(PostCreatorEditMenu)
