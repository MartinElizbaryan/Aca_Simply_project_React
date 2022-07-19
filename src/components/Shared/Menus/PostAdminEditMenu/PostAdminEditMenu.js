import { useState } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import { MenuItem } from "@mui/material"
import EditPost from "../../../EditPost/EditPost"
import { AlertDialog } from "../../Dialogs/AlertDialog/AlertDialog"
import api from "../../../../api/api"
import { getUserInfo } from "../../../../redux/user/userSelectors"
import { withAdminChecking } from "../../../../hocs/withAdminChecking"

function PostAdminEditMenu({ post, handleMenuClose, ...props }) {
  const [openCompleteAlert, setOpenCompleteAlert] = useState(false)
  const [openEditPost, setOpenEditPost] = useState(false)
  const [openTrustedAlert, setOpenTrustedAlert] = useState(false)
  const user = useSelector(getUserInfo)
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()

  const toggleOpenEditPost = (open) => {
    setOpenEditPost(open)
  }

  const changeCompleted = async () => {
    setOpenCompleteAlert(false)
    await api.patch(`/posts/completed/${post.id}`)
    navigate("/profile/my-posts")
  }

  const changeTrusted = async () => {
    setOpenTrustedAlert(false)
    await api.patch(`/admin/posts/trusted/${id}`)
    navigate("/profile/pending-posts")
  }

  return (
    <>
      {user.id === post.user_id && (
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
        </>
      )}
      {!post.trusted && (
        <MenuItem
          onClick={() => {
            setOpenTrustedAlert(true)
          }}
        >
          {t("Trust")}
        </MenuItem>
      )}
      <EditPost
        post={post}
        open={openEditPost}
        toggleOpen={(open) => {
          toggleOpenEditPost(open)
          handleMenuClose()
        }}
      />
      <AlertDialog
        open={openTrustedAlert}
        title={t("Are_you_sure")}
        message={t("Trusted_message")}
        handleClose={() => {
          setOpenTrustedAlert(false)
          handleMenuClose()
        }}
        handleOk={changeTrusted}
      />
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
    </>
  )
}

export default withAdminChecking(PostAdminEditMenu)
