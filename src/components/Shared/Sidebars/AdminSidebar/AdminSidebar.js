import { ListItemWithIcon } from "../../ListItems/ListItemWithIcon/ListItemWithIcon"
import KeyIcon from "@mui/icons-material/Key"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import { useTranslation } from "react-i18next"
import { adminHOC } from "../../../../hocs/adminHOC"

const AdminSidebar = () => {
  const { t } = useTranslation()
  return (
    <>
      <ListItemWithIcon
        url="/profile/pending-posts"
        icon={<KeyIcon />}
        title={t("Pending_Posts")}
      />

      <ListItemWithIcon url="/profile/faq" icon={<QuestionMarkIcon />} title={t("FAQ")} />
    </>
  )
}

export default adminHOC(AdminSidebar)
