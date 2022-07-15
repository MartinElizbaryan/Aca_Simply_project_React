import { useTranslation } from "react-i18next"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"
import { ListItemWithIcon } from "../../ListItems/ListItemWithIcon/ListItemWithIcon"
import { withAdminChecking } from "../../../../hocs/withAdminChecking"

const AdminSidebar = () => {
  const { t } = useTranslation()
  return (
    <>
      <ListItemWithIcon
        url="/profile/pending-posts"
        icon={<AccessTimeOutlinedIcon />}
        title={t("Pending_Posts")}
      />
      <ListItemWithIcon url="/profile/faq" icon={<QuestionMarkIcon />} title={t("FAQ")} />
    </>
  )
}

export default withAdminChecking(AdminSidebar)
