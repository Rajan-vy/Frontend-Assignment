import React from 'react'

import { Footer } from 'flowbite-react';

const PageFooter = () => {
    return (
        <div>
            <div className='flex-1'></div>
            <div className='sticky mb-0'>
                <Footer container>
                    <Footer.Copyright
                        by="Flowbite™"
                        href="#"
                        year={2022}
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">
                            About
                        </Footer.Link>
                        <Footer.Link href="#">
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link href="#">
                            Licensing
                        </Footer.Link>
                        <Footer.Link href="#">
                            Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </Footer>
            </div>
        </div>


    )
}

export default PageFooter;