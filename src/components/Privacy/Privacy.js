import { Box, Typography } from "@mui/material"
import useStyles from "./styles"
import { useTranslation } from "react-i18next"
import { withSuspenseAdding } from "../../hocs/withSuspenseAdding"

const Privacy = () => {
  const { t } = useTranslation()

  const classes = useStyles()

  return (
    <Box className={classes.flexible}>
      <Typography variant="h4" className={classes.header}>
        {t("privacy")}
      </Typography>

      <Typography className={classes.policyText}>
        THIS PRIVACY POLICY (“PRIVACY POLICY “) IS AN ELECTRONIC RECORD IN THE FORM OF AN ELECTRONIC
        CONTRACT FORMED UNDER INFORMATION TECHNOLOGY ACT, 2000 AND RULES MADE THERE UNDER AND THE
        AMENDED PROVISIONS PERTAINING TO ELECTRONIC DOCUMENTS / RECORDS IN VARIOUS STATUTES AS
        AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000. THE PRIVACY POLICY DOES NOT REQUIRE ANY
        PHYSICAL, ELECTRONIC OR DIGITAL SIGNATURE.
        <br /> <br />
        THE PRIVACY POLICY IS A LEGALLY BINDING DOCUMENT BETWEEN USER AND LOST&FOUNDNETWORKS.COM
        (BOTH TERMS DEFINED BELOW). THE PRIVACY POLICY WILL BE EFFECTIVE UPON YOUR ACCEPTANCE OF THE
        SAME (DIRECTLY OR INDIRECTLY IN ELECTRONIC FORM OR BY MEANS OF AN ELECTRONIC RECORD) AND
        WILL GOVERN THE RELATIONSHIP BETWEEN USER AND WEBSITE FOR THE USE OF THE WEBSITE (DEFINED
        BELOW). <br /> <br />
        PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY USING THE WEBSITE, YOU INDICATE THAT YOU
        UNDERSTAND, AGREE AND CONSENT TO THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH THE TERMS OF
        THIS PRIVACY POLICY, PLEASE DO NOT USE THIS WEBSITE. <br />
        By providing us your Information or by making use of the facilities provided by the Website,
        You hereby consent to the collection, storage, processing and transfer of any or all of Your
        Personal Information and Non-Personal Information by LOST&FOUND NETWORKS as specified under
        this Privacy Policy. You further agree that such collection, use, storage and transfer of
        Your Information shall not cause any loss or wrongful gain to you or any other person.{" "}
        <br /> <br />
        Your privacy is an important part of our relationship with you. Protecting your privacy is
        only part of our mission to provide a secure web environment. When using our site, including
        our services, your information will remain strictly confidential. Contributions made on our
        blog or on our forum are open to public view; so please do not post any personal information
        in your dealings with others. We accept no liability for those actions because it is your
        sole responsibility to adequate and safe post content on our site. We will not share, rent
        or share your information with third parties. <br /> <br />
        When you visit our site, we collect technical information about your computer and how you
        access our website and analyze this information such as Internet Protocol (IP) address of
        your computer, the operating system used by your computer, the browser (eg, Chrome, Firefox,
        Internet Explorer or other) your computer uses, the name of your Internet service provider
        (ISP), the Uniform Resource Locator (URL) of the website from which you come and the URL to
        which you go next and certain operating metrics such as the number of times you use our
        website. This general information can be used to help us better understand how our site is
        viewed and used. We may share this general information about our site with our business
        partners or the general public. For example, we may share the information on the number of
        daily unique visitors to our site with potential corporate partners or use them for
        advertising purposes. This information does contain any of your personal data that can be
        used to contact you or identify you. <br /> <br />
        When we place links or banners to other sites of our website, please note that we do not
        control this kind of content or practices or privacy policies of those sites. We do not
        endorse or assume no responsibility for the privacy policies or information collection
        practices of any other website other than managed sites. <br /> <br /> We use the highest
        security standard available to protect your identifiable information in transit to us. All
        data stored on our servers are protected by a secure firewall for the unauthorized use or
        activity can not take place. Although we make every effort to protect your personal
        information against loss, misuse or alteration by third parties, you should be aware that
        there is always a risk that low-intentioned manage to find a way to thwart our security
        system or that Internet transmissions could be intercepted. <br /> <br /> We reserve the
        right, without notice, to change, modify, add or remove portions of our Privacy Policy at
        any time and from time to time. These changes will be posted publicly on our website. When
        you visit our website, you accept all the terms of our privacy policy. Your continued use of
        this website constitutes your continued agreement to these terms. If you do not agree with
        the terms of our privacy policy, you should cease using our website. <br /> <br /> Disputes{" "}
        <br /> <br />
        Any disputes regarding your privacy are subject to the User agreement & Terms, including but
        not limited to any provisions related to indemnification, limitations on damages, and choice
        of law and forum. <br /> <br /> How to Contact Us <br /> <br /> If you have questions about
        this Privacy Policy.
      </Typography>
    </Box>
  )
}

export default withSuspenseAdding(Privacy)
