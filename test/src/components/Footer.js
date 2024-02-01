import React from 'react'
import { footerLinks, socialMedia } from '../constants'

export default function Footer() {
  return (
    <div>

        <div>
            {footerLinks.map((footerlink)=> (
                <div key={footerlink.title}>
                    <h4>{footerlink.title}</h4>

                    </div>
            ))}

        </div>
    </div>
  )
}
