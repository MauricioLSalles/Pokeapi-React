import { type ReactElement } from 'react'
import './LanguageSection.css'

export default function LanguageSection(): ReactElement {
    return (
        <div className='languageSection'>
            <span className='text-normal'>Select a language</span>
            <div className='launageFlags'>
                <img src="/flags/flag1.svg" />
                <img src="/flags/flag2.svg" />
                <img src="/flags/flag3.svg" />
                <img src="/flags/flag4.svg" />
            </div>
        </div>
    )
}
