import { i18n } from 'next-i18next'
import { TOptionsBase } from 'i18next/index.d'
import parse from 'html-react-parser'

// import { TOptionsBaseExtended } from ':@/i18next'

// import { I18NextNS } from ':@/i18next'
import { colors } from '@/constants/colors'

export function translateAndParseHTML(
  ns: string,
  key: string,
  moreOptions?: TOptionsBase
) {
  const interpOptions = moreOptions?.interpolation || {}

  const translatedText =
    i18n?.t(`${ns}:${key}`, {
      ...moreOptions,
      interpolation: { escapeValue: false, ...interpOptions },
    }) || ''
  const emphasizePattern = /\*\*([\w \u0E00-\u0E7F \-\.,\/!@#$%&฿|?']+)\*\*/g // `**Any Text(thai, english others need to add regex)**`
  const lineBreakPattern = /\|\|/g // `||`

  const replacedText = translatedText
    .replace(
      new RegExp(emphasizePattern),
      `<span style="color: ${colors.primary}">$1</span>`
    )
    .replace(new RegExp(lineBreakPattern), '<br />')

  return parse(replacedText)
}
