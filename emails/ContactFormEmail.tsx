import {
  Button,
  Html,
  Head,
  Heading,
  Body,
  Text,
  Hr,
} from "@react-email/components"

interface Props {
  name: string
  body: string
}

const ContactFormEmail = ({ name, body }: Props) => {
  return (
    <Html
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Head style={{ width: "90%", maxWidth: "50em" }}>
        <Heading style={{ fontFamily: "sans-serif" }}>
          A message from {name}
        </Heading>
      </Head>
      <Hr />
      <Body style={{ width: "90%", maxWidth: "40em" }}>
        <Text style={{ lineHeight: 1.8, fontFamily: "sans-serif" }}>
          {body}
        </Text>
      </Body>
    </Html>
  )
}

export default ContactFormEmail
