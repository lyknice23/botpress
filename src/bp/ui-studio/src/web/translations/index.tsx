import { langExtend, langInit } from 'botpress/shared'

import ar from './ar.json'
import en from './en.json'
import es from './es.json'
import fr from './fr.json'
import pt from './pt.json'
import ru from './ru.json'
import uk from './uk.json'
const translations = { en, fr, pt, es, ar, ru, uk }

const initializeTranslations = () => {
  langExtend(translations)
  langInit()
}

export default initializeTranslations
