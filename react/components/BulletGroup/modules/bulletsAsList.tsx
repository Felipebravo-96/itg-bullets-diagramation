import React from 'react'
import { BulletsSchema } from '../BulletTypes'
import Bullet from '../Bullet'

// type Bullet = {
//     image: string
//     titleBullet?: string
//     link?: LinkProps
// }

export const getBulletsAsTSXList = (
    bullets: BulletsSchema
) => (
    bullets.map((bullet: any, index) => {
        console.log(bullet)
        return <Bullet
            key={index}
            src={bullet.image}
            titleBullet={bullet.titleBullet}
            link={bullet.link
                ? bullet.link
                :
                {
                    url: "",
                    attributeNofollow: false,
                    attributeTitle: "",
                    openNewTab: false,
                    newTab: false
                }
            }

        />
        // return <div key={index}>
        //     <a href={bullet?.link?.url ? bullet?.link?.url : ""}>
        //         <p>{bullet?.itleBullet}</p>
        //         <p>{bullet?.image}</p>
        //     </a>
        // </div>
    })

)

