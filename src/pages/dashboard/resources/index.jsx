import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import AppLayout from '@/components/Layouts/AppLayout'
import Accordion from '@/components/Accordion'
import Quote from '@/components/Quote'
import DropdownItem from '@/components/DropdownItem'

import {
    ArrowDownTrayIcon,
    ArrowTopRightOnSquareIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import ReactPlayer from 'react-player'

import users from './bio.json'

const sortedUsers = users.sort((a, b) => {
    if (a.last_name + ' ' + a.first_name < b.last_name + ' ' + b.first_name) {
        return -1
    }
    if (a.last_name + ' ' + a.first_name > b.last_name + ' ' + b.first_name) {
        return 1
    }
    return 0
})

const accordions = [
    {
        id: 'directory',
        title: 'Directory',
        color: 'dark-green',
        type: 'line',
        items: [
            {
                title: 'A–D',
                icons: [ChevronRightIcon],
                items: sortedUsers.filter(user => {
                    let l = user.last_name[0]?.toUpperCase()
                    if (!l) {
                        l = user.first_name[0].toUpperCase()
                    }
                    return l >= 'A' && l <= 'D'
                }),
            },
            {
                title: 'E–J',
                icons: [ChevronRightIcon],
                items: sortedUsers.filter(user => {
                    let l = user.last_name[0]?.toUpperCase()
                    if (!l) {
                        l = user.first_name[0].toUpperCase()
                    }
                    return l >= 'E' && l <= 'J'
                }),
            },
            {
                title: 'K–O',
                icons: [ChevronRightIcon],
                items: sortedUsers.filter(user => {
                    let l = user.last_name[0]?.toUpperCase()
                    if (!l) {
                        l = user.first_name[0].toUpperCase()
                    }
                    return l >= 'K' && l <= 'O'
                }),
            },
            {
                title: 'P–S',
                icons: [ChevronRightIcon],
                items: sortedUsers.filter(user => {
                    let l = user.last_name[0]?.toUpperCase()
                    if (!l) {
                        l = user.first_name[0].toUpperCase()
                    }
                    return l >= 'P' && l <= 'S'
                }),
            },
            {
                title: 'T–Z',
                icons: [ChevronRightIcon],
                items: sortedUsers.filter(user => {
                    let l = user.last_name[0]?.toUpperCase()
                    if (!l) {
                        l = user.first_name[0].toUpperCase()
                    }
                    return l >= 'T' && l <= 'Z'
                }),
            },
        ],
    },
    {
        id: 'culture',
        title: 'Culture & Organization',
        color: 'orange',
        videos: ['https://player.vimeo.com/video/898794291?h=8c6ca2f39e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'],
        videoTitles: ['Leadership Is a Process'],
        videoDescriptions: ['Clive Meanwell & Nancye Green'],
        thumbnails: ['/images/thumbnails/c-n-y.png'],
        items: [
            {
                title: 'Code of Conduct',
                icons: [ChevronRightIcon],
                items: [
                    {
                        title: 'Code of Conduct',
                        download:
                            '/downloads/culture_organization/01_Code_of_Conduct/Metsera - Global Code of Conduct (FINAL - 08.04.2023 v1a).pdf',
                    },
                    {
                        title: (
                            <>
                                Integrity Hotline
                                <span className="text-orange">*</span>
                            </>
                        ),
                    },
                ],
            },
            {
                title: 'Leadership Competencies',
                icons: [ArrowDownTrayIcon],
                download:
                    '/downloads/culture_organization/06_Leadership_Competencies/Metsera_Competencies_Leadership_240117_02.pptx',
            },
            {
                title: 'Collegio',
                icons: [ChevronRightIcon],
                items: [
                    {
                        title: '2024',
                        icons: [ChevronRightIcon],
                        items: [
                            {
                                title: 'Invitation',
                                download: '/downloads/culture_organization/03_Collegio/FINAL APPROVED INVITE_COLLEGIO_2024_04_02.pdf'
                            },
                            {
                                title: 'Wednesday Dining Options',
                                download: '/downloads/culture_organization/03_Collegio/Metsera_Offsite_Dining_240425_03_66_.pdf'
                            },
                            {
                                title: 'Headshot Schedule',
                                download: '/downloads/culture_organization/03_Collegio/Metsera_Headshot_Schedule_240506_03.pdf'
                            },
                            {
                                title: 'Agenda',
                                download: '/downloads/culture_organization/03_Collegio/Metsera_Collegio_Agenda__240507_06.pdf'
                            },
                        ]
                    },
                ]
            },
            {
                title: 'Office Location-based Tips',
                icons: [ChevronRightIcon],
                items: [
                    {
                        title: 'London',
                        download:
                            '/downloads/culture_organization/Location_Tips/Metsera_OfficeLocationBasedTips_240219_London.pdf',
                    },
                    {
                        title: 'New Jersey',
                        download:
                            '/downloads/culture_organization/Location_Tips/Metsera_OfficeLocationBasedTips_240219_NJ.pdf',
                    },
                    {
                        title: 'New York',
                        download:
                            '/downloads/culture_organization/Location_Tips/Metsera_OfficeLocationBasedTips_240305_NY.pdf',
                    },
                ],
            },
            {
                title: 'Core Values',
                pending: true,
                icons: [ArrowDownTrayIcon],
            },
            {
                title: 'Onboarding Suite',
                icons: [ChevronRightIcon],
                items: [
                    {
                        title: 'Directory Bio Guidelines & Template',
                        download:
                            '/downloads/culture_organization/08_Onboarding_Suite/Directory_Bio_Template/Metsera_DirectoryBio_Template_2024.dotx',
                    },
                    {
                        title: 'IT Introduction',
                        download:
                            '/downloads/culture_organization/08_Onboarding_Suite/02_IT_Introduction/New Hire- Metsera IT Introduction v3.pdf',
                    },
                    {
                        title: 'New Hire Email Template',
                        download:
                            '/downloads/culture_organization/08_Onboarding_Suite/New_Hire_Intro/New Hire Intro Email Template (from Manager).pdf',
                    },
                    {
                        title: 'Onboarding Checklist — 30/60/90 Day Plan',
                        download:
                            '/downloads/culture_organization/08_Onboarding_Suite/04_Onboarding_Plan_Checklist/Metera_Toolkit_OnboardingPlanAndChecklist_240214_02.pdf',
                    },
                    {
                        title: 'Onboarding Workflow',
                        download:
                            '/downloads/culture_organization/08_Onboarding_Suite/05_Onboarding_Workflow/Mgr Toolkit - Onboarding workflow2.pdf',
                    },
                    {
                        title: 'Professional Bio Guidelines & Template',
                        download:
                            '/downloads/culture_organization/08_Onboarding_Suite/Directory_Bio_Template/Metsera_Professional_Bio_Template_240220_03.dotx',
                    },
                    {
                        title: 'Welcome to Metsera',
                        download:
                            '/downloads/culture_organization/08_Onboarding_Suite/07_Welcome_to_Metsera/New Hire- Metsera Onboarding Welcome.pdf',
                    },
                ],
            },
            {
                title: 'Health Science Competencies',
                icons: [ArrowDownTrayIcon],
                download:
                    '/downloads/culture_organization/07_Health_Science_Competencies/Metsera_Competencies_HealthScience_240229_03.pptx',
            },
            {
                title: 'Strategic Goals',
                icons: [ArrowDownTrayIcon],
                download:
                    '/downloads/culture_organization/Strategic_Goals/Metsera_2024_Goals_Slide_240219_03.pdf',
            },
            {
                title: 'Human Strategy',
                icons: [ChevronRightIcon],
                items: [
                    {
                        title: 'Privacy',
                        icons: [ChevronRightIcon],
                        items: [
                            {
                                title: 'US',
                                icons: [ChevronRightIcon],
                                items: [
                                ]
                            },
                            {
                                title: 'UK',
                                icons: [ChevronRightIcon],
                                items: [
                                    {
                                        title: 'Privacy Notice',
                                        download:
                                            '/downloads/culture_organization/Human_Strategy/Zihipp Privacy Notice draft FINAL CLEAN.pdf',

                                    },
                                    {
                                        title: 'Data Protection Policy',
                                        download:
                                            '/downloads/culture_organization/Human_Strategy/Zihipp Data Protection Policy FINAL.pdf',
                                    }
                                ]
                            },
                        ]
                    },
                ]
            },

            {
                title: 'Teams',
                pending: true,
                icons: [ArrowDownTrayIcon],
            },
        ],
    },
    {
        id: 'tools',
        title: 'Tools & Software',
        color: 'green',
        videos: [
            'https://player.vimeo.com/video/898794270?h=8f14ff42d5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
            'https://player.vimeo.com/video/914779824?h=ae7da31cda&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        ],
        videoTitles: ['Messaging Using MIRS-A', 'PMM'],
        videoDescriptions: ['Clive Meanwell & Nancye Green', 'James Mannion'],
        thumbnails: [
            '/images/thumbnails/c-n-y.png',
            '/images/thumbnails/j-y.png',
        ],
        items: [
            {
                title: 'Branding',
                icons: [ChevronRightIcon],
                items: [
                    {
                        title: 'Brand Guidelines',
                        download:
                            '/downloads/tools_software/branding/brand_guidelines/Brand Identity Guidelines.pdf',
                    },
                    {
                        title: 'Logos',
                        download:
                            '/downloads/tools_software/branding/logo/logo.zip',
                    },
                    {
                        title: 'North Star',
                        download:
                            '/downloads/tools_software/branding/north_star/North Star.zip',
                    },
                ],
            },
            {
                title: 'MIRS-A',
                icons: [ArrowDownTrayIcon],
                download:
                    '/downloads/tools_software/mirs/Metsera_MIRS_231220_03.docx',
            },
            {
                title: 'Business Comms. Best Practices',
                pending: true,
                icons: [ArrowDownTrayIcon],
            },
            {
                title: 'Design Thinking',
                icons: [ArrowDownTrayIcon],
                download:
                    '/downloads/tools_software/design_thinking/Design Thinking.docx',
            },
            {
                title: 'Project Management Mastery',
                icons: [ChevronRightIcon],
                items: [
                    {
                        title: 'Abbreviated Version',
                        download:
                            '/downloads/tools_software/project_management_mastery/abbreviated_version/PMM_Abbreviated Version.pdf',
                    },
                    {
                        title: 'Full Book',
                        download:
                            '/downloads/tools_software/project_management_mastery/full_book/PMM_FullBook.pdf',
                    },
                ],
            },
            {
                title: 'Discipline of Teams',
                icons: [ArrowDownTrayIcon],
                download:
                    '/downloads/tools_software/discipline_of_teams/Discipline of Teams.pptx',
            },
            {
                title: 'Speaking our Language (Business)',
                pending: true,
                icons: [ArrowDownTrayIcon],
            },
            {
                title: 'Speaking our Language (Science)',
                pending: true,
                icons: [ArrowDownTrayIcon],
            },
            {
                title: 'Team Charter',
                icons: [ArrowDownTrayIcon],
                download:
                    '/downloads/tools_software/team_charter/Team Charter.pptx',
            },
            {
                title: 'Technology Suite',
                icons: [ChevronRightIcon],
                items: [
                    {
                        title: 'ChatGPT4',
                    },
                    {
                        title: 'DocuSign',
                    },
                    {
                        title: 'Endpoint News',
                    },
                    {
                        title: 'GraphPad Prism',
                    },
                    {
                        title: 'Mural',
                    },
                    {
                        title: 'QuickHelp',
                    },
                    {
                        title: 'ReadCube Papers',
                    },
                    {
                        title: 'Smartsheet',
                    },
                    {
                        title: 'Think-Cell',
                    },
                    {
                        title: 'Zoom',
                    },
                ],
            },
            {
                title: 'Templates',
                icons: [ChevronRightIcon],
                items: [
                    {
                        title: 'PowerPoint',
                        download:
                            '/downloads/tools_software/templates/PPT/Metsera_Template.pptx',
                    },
                    {
                        title: 'Letterhead',
                        download:
                            '/downloads/tools_software/templates/Letterhead/Metsera_Letterhead.docx',
                    },
                    {
                        title: 'Word',
                        download:
                            '/downloads/tools_software/templates/Word/Metsera_Word.docx',
                    },
                    {
                        title: 'Prism',
                        download:
                            '/downloads/tools_software/templates/Prism/Metsera_PRISM.pdf',
                    },
                    {
                        title: 'Excel',
                        download:
                            '/downloads/tools_software/templates/Excel/Metsera_Excel_Template_240515_01.xlsx',
                    },
                ],
            },
            {
                title: 'Tutorials',
                icons: [ChevronRightIcon],
                items: [
                    {
                        title: 'Formatting Tables in Word Tutorial',
                        download:
                            '/downloads/tools_software/tutorials/Formatting_Tables_in_Word_Tutorial/Formatting Tables in Word Tutorial.zip',
                    },
                    {
                        title: 'PowerPoint Tutorial',
                        download:
                            '/downloads/tools_software/templates/powerpoint_tutorial/Metsera_PPT_5.mp4',
                    },
                ],
            },
            {
                title: 'Write First Time',
                icons: [ArrowDownTrayIcon],
                download:
                    '/downloads/tools_software/write_first_time/MET_Metsera Write First Time.pptx',
            },
        ],
    },
    {
        id: 'workshops',
        title: 'Workshops',
        color: 'yellow',
        type: 'table',
        items: [
            {
                title: 'Digital Learning Series',
                label: 'Eldri Dogani',
                icons: [ChevronRightIcon],
                brief: 'Register for these workshops or watch the recordings to be more confident in your use of the digital tools, and thereby help accelerate the Innovation Cycle!​',
                items: [
                    { title: 'Session 1 – Microsoft Outlook (PC)', date: 'April 9, 2024', time: '10:00am-11:00am ET', link: '/videos/Digital Learning Series  PC Session 1  Microsoft Outlook PC-20240409_144809-Meeting Recording.mp4', status: 'complete' },
                    { title: 'Session 1 – Microsoft Outlook (Mac)', date: 'April 12, 2024', time: '10:00am-11:00am ET', link: '/videos/Digital Learning Series  Mac_Session 1  Microsoft Outlook Mac-20240412_143753-Meeting Recording.mp4', status: 'complete' },
                    { title: 'Session 2 – Microsoft Teams (PC)', date: 'April 16, 2024', time: '10:00am-11:00am ET', link: '/videos/Digital Learning Series  PC Session 2  Microsoft Teams PC-20240416_144433-Meeting Recording.mp4', status: 'complete' },
                    { title: 'Session 2 – Microsoft Teams (Mac)', date: 'May 3, 2024', time: '10:00am-11:00am ET', link: 'https://events.teams.microsoft.com/event/69f0f1bc-69b1-4f74-a135-6eba2640250e@58e3d888-5f89-456e-9589-48db454d573d', status: 'active' },
                    { title: 'Session 3 – Document Sharing & Collaborating in OneDrive, SharePoint & Teams (PC)', date: 'April 30, 2024', time: '10:00am-11:00am ET', link: '/videos/Digital Learning Series  PC Session 3  Document Sharing  Collaborating  PC-20240430_145117-Meeting Recording.mp4', status: 'complete' },
                    { title: 'Session 3 – Document Sharing & Collaborating in OneDrive, SharePoint & Teams (Mac)', date: 'May 17, 2024', time: '10:00am-11:00am ET', link: 'https://events.teams.microsoft.com/event/9741191c-e85a-41f6-aded-8f2158f0e188@58e3d888-5f89-456e-9589-48db454d573d', status: 'active' },
                    { title: 'Session 4 – OneNote (PC)', date: 'May 14, 2024', time: '10:00am-11:00am ET', link: '/videos/Digital Learning Series  PC Session 4 - OneNote (PC)-20240514_143935-Meeting Recording.mp4', status: 'complete' },
                    { title: 'Session 4 – OneNote (Mac)', date: 'May 31, 2024', time: '10:00am-11:00am ET', link: 'https://events.teams.microsoft.com/event/98861a78-21b6-4c75-96db-9d42a4c08890@58e3d888-5f89-456e-9589-48db454d573d', status: 'active' },
                    { title: 'Session 5 – Convenience Tools & Use of Chrome (PC)', date: 'May 21, 2024', time: '10:00am-11:00am ET', link: 'https://events.teams.microsoft.com/event/fae40668-3f73-456c-b792-e40a0719f0d3@58e3d888-5f89-456e-9589-48db454d573d', status: 'active' },
                    { title: 'Session 5 – Convenience Tools & Use of Chrome (Mac)', date: 'June 7, 2024', time: '10:00am-11:00am ET', link: 'https://events.teams.microsoft.com/event/076da577-2cfa-44c0-8447-f631a6bcc3e8@58e3d888-5f89-456e-9589-48db454d573d', status: 'active' },
                    { title: 'Session 6 – Working Across Portfolio Companies (PC)', date: 'June 4, 2024', time: '10:00am-11:00am ET', link: 'https://events.teams.microsoft.com/event/da7f9a7a-e19d-4670-ba92-711b09c0e2ae@58e3d888-5f89-456e-9589-48db454d573d', status: 'active' },
                    { title: 'Session 6 – Working Across Portfolio Companies (Mac)', date: 'June 14, 2024', time: '10:00am-11:00am ET', link: 'https://events.teams.microsoft.com/event/cb5b4e63-6073-45c3-8f18-4f9ab65ab6dc@58e3d888-5f89-456e-9589-48db454d573d', status: 'active' },
                ],
            },
            {
                title: 'Branding Workshop',
                label: 'Michael Donovan',
                icons: [ChevronRightIcon],
                brief: 'A brief description about the workshop goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisomd icidut ut laoreet dolore magna',
                items: [],
            },
            {
                title: 'PowerPoint Workshop',
                label: 'Jayj Walsh',
                icons: [ChevronRightIcon],
                brief: 'A brief description about the workshop goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisomd icidut ut laoreet dolore magna',
                items: [],
            },
        ],
    },
    {
        id: 'references',
        title: 'References',
        color: 'light-grey',
        items: [
            {
                title: 'Obesity, the Other Pandemic of the 21st Century',
                description: 'Ada Cuevas & Donna Ryan',
                icons: [BookOpenIcon, ArrowTopRightOnSquareIcon],
                link: `https://www.amazon.com/Obesity-other-pandemic-21st-
                century/dp/9566210027/ref=sr_1_1?crid=79TDUGCBU5FA&amp;keywords=Obesity%2C+the+Other
                +Pandemic+of+the+%0321st+Century+%03Ada+Cuevas+%26+Donna+Ryan&amp;qid=1701209260&amp;
                sprefix=obesity%2C+the+other+pandemic+of+the+21st+century+ada+cuevas+%26+donna+ryan
                %2Caps%2C77&amp;sr=8-1`,
            },
            {
                title: 'Discipline of Teams',
                description: 'Jon Katzenbach & Douglas K. Smith',
                icons: [BookOpenIcon, ArrowTopRightOnSquareIcon],
                link: `https://www.amazon.com/Discipline-Harvard-Business-Review-
                Classics/dp/1422179753/ref=sr_1_2?crid=2HO1U3MVPZSFF&amp;keywords=Discipline+of+Teams+
                %03Jon+Katzenbach+%26+Douglas+K.+Smith&amp;qid=1701209532&amp;s=audible&amp;sprefix=discipline+
                of+teams+jon+katzenbach+%26+douglas+k.+smith+%2Caudible%2C300&amp;sr=1-2`,
            },
            {
                title: "The Innovator's Dilemma",
                description: 'Clayton Christensen',
                icons: [BookOpenIcon, ArrowTopRightOnSquareIcon],
                link: `https://www.amazon.com/The-Innovators-Dilemma-
                audiobook/dp/B06Y4RRGVV/ref=sr_1_1?crid=M6EZ7SIQSI5A&amp;keywords=The+Innovator%E2%8
                0%99s+Dilemma+%03Clayton+Christensen&amp;qid=1701209412&amp;sprefix=the+innovator+s+dilem
                ma+clayton+christensen%2Caps%2C93&amp;sr=8-1`,
            },
            {
                title: 'The Pyramid Principle',
                description: 'Barbara Minto',
                icons: [BookOpenIcon, ArrowTopRightOnSquareIcon],
                link: `https://www.amazon.com/Pyramid-Principle-Logic-Writing-
                Thinking/dp/1292372265/ref=sr_1_1?crid=1RJRM5OCYRGJV&amp;keywords=The+Pyramid+Principl
                e+%03Barbara+Minto&amp;qid=1701209610&amp;s=audible&amp;sprefix=the+pyramid+principle+barbara+
                minto%2Caudible%2C91&amp;sr=1-1`,
            },
            {
                title: 'Leading with Purpose',
                description: 'Richard R. Ellsworth',
                icons: [BookOpenIcon, ArrowTopRightOnSquareIcon],
                link: `https://www.amazon.com/Leading-Purpose-Corporate-Realities-
                Stanford/dp/0804743851/ref=sr_1_1?crid=2UZJOPN6Y6D72&amp;keywords=Leading+with+Purpose
                +%03Richard+R.+Ellsworth&amp;qid=1701209449&amp;s=audible&amp;sprefix=leading+with+purpose+richar
                d+r.+ellsworth%2Caudible%2C83&amp;sr=1-1`,
            },
            {
                title: 'Executing Your Strategy',
                description: 'M. Morgan, R. Levitt, & W. Malek',
                icons: [BookOpenIcon, ArrowTopRightOnSquareIcon],
                link: `https://www.amazon.com/Executing-Your-Strategy-Break-
                Down/dp/1591399564/ref=sr_1_1?crid=26HGSQH2TDAOA&amp;keywords=Executing+Your+Strateg
                y+M.+Morgan%2C+R.+Levitt%2C+%26+W.+Malek&amp;qid=1701209679&amp;sprefix=executing+your+s
                trategy+m.+morgan%2C+r.+levitt%2C+%26+w.+malek%2Caps%2C84&amp;sr=8-1`,
            },
            {
                title: 'Mergers: Leadership, Performance and Corporate Health',
                description: 'D. Fubini, C. Price, M. Zollo',
                icons: [BookOpenIcon, ArrowTopRightOnSquareIcon],
                link: `https://www.amazon.com/Mergers-Leadership-Performance-Corporate-
                Business/dp/0230019722/ref=sr_1_1?crid=2X9ZJZEKS1WWJ&amp;keywords=Mergers%3A+Leadersh
                ip%2C+%03Performance+and+Corporate+Health+%03D.+Fubini%2C+C.+Price%2C+M.+Zollo&amp;qi
                d=1701209501&amp;s=audible&amp;sprefix=mergers+leadership%2C+performance+and+corporate+heal
                th+d.+fubini%2C+c.+price%2C+m.+zollo%2Caudible%2C80&amp;sr=1-1`,
            },
            {
                title: 'On Design Thinking',
                description:
                    'Harvard Business Review, Tim Brown, Clayton M. Christensen, Indra Nooyi, Vijay Govindarajan',
                icons: [BookOpenIcon, ArrowTopRightOnSquareIcon],
                link: `https://www.amazon.com/Reads-Design-Thinking-featured-Brown/dp/1633698807/ref=asc_df_1633698807/?tag=hyprod-20&linkCode=df0&hvadid=507775373269&hvpos=&hvnetw=g&hvrand=4388010855507610965&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9003947&hvtargid=pla-967302216197&psc=1&mcid=300e3908691339eeb08f74de3566568a&gclid=CjwKCAiApaarBhB7EiwAYiMwqqnDynOUqDrKyM7P2FQKaWm9fRHCBflGodURvdovHoUqgYReWaGPxRoCbVQQAvD_BwE`,
            },
        ],
    },
]

const Resources = () => {
    const quote = {
        content: (
            <>
                A good tool
                <br /> improves the way
                <br /> you work. A great
                <br /> tool improves
                <br /> the way you think.
            </>
        ),
        author: 'Jeff Duntemann',
        url: 'https://player.vimeo.com/video/888891207?h=95f412588c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    }

    const router = useRouter()
    const [play, setPlay] = useState(false)
    const [open, setOpen] = useState([])
    const [search, setSearch] = useState('')
    const [directoryOpen, setDirectoryOpen] = useState([]);

    const [currentAccordions, setCurrentAccordions] = useState(accordions)

    const playVideo = link => {
        setPlay(link)
    }

    useEffect(() => {
        if (search) {
            const newOpen = [];
            const newDirectoryOpen = [];
            if (search.toLowerCase() === '*pending approval') {
                const list = accordions.map((accordion, index) => {
                    if (accordion.type === 'line') return { ...accordion }

                    const items = accordion.items.filter(
                        item =>
                            !item.download && !item.items?.length && !item.link,
                    )
                    if (items.length) newOpen.push(index)
                    return {
                        ...accordion,
                        items,
                    }
                })
                setCurrentAccordions(list)
                setOpen(newOpen)
            } else {
                const list = accordions.map((accordion, index) => {
                    if (accordion.type === 'line') {
                        const list = accordion.items.map((items, key) => {
                            let filterItems = items.items.filter(item => {
                                return (
                                    item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                                    item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                                    item.phone.toLowerCase().includes(search.toLowerCase())
                                )
                            })
                            if (filterItems.length) { newDirectoryOpen.push(key); newOpen.push(index) };
                            return {
                                title: items.title,
                                icons: items.icons,
                                items: filterItems,
                            };
                        })
                        const directory = {
                            id: 'directory',
                            title: 'Directory',
                            color: 'dark-green',
                            type: 'line',
                            items: list
                        }
                        setDirectoryOpen(newDirectoryOpen);
                        return directory;
                    }

                    const items = (accordion.items || []).filter(item => {
                        return (
                            item.title
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            (item.items || []).some(
                                i =>
                                    typeof i.title === 'string' &&
                                    i.title
                                        .toLowerCase()
                                        .includes(search.toLowerCase()),
                            ) ||
                            item.description
                                ?.toLowerCase()
                                .includes(search.toLowerCase())
                            ||
                            item.label
                                ?.toLowerCase()
                                .includes(search.toLowerCase())
                            ||
                            item.brief
                                ?.toLowerCase()
                                .includes(search.toLowerCase())
                        )
                    })
                    if (items.length) newOpen.push(index)
                    return {
                        ...accordion,
                        items,
                    }
                })
                setCurrentAccordions(list)
                setOpen(newOpen)
            }
        } else {
            setOpen([]);
            setDirectoryOpen([]);
            setCurrentAccordions(accordions);
        }
    }, [search])
    useEffect(() => {
        setSearch('')
        const tab = router.query.tab
        setOpen([Number(tab) || 0])

        if (tab !== undefined) {
            const tabToDivId = {
                0: 'directory',
                1: 'culture',
                2: 'tools',
                3: 'references',
            }

            const targetDivId = tabToDivId[tab]

            if (targetDivId) {
                const targetDiv = document.getElementById(targetDivId)
                if (targetDiv) {
                    targetDiv.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })
                }
            }
        }
    }, [router.query.tab])

    return (
        <AppLayout
            layoutClassName="bg-[#f6f7f7] w-full"
            childrenLayout="w-full text-white">
            <Head>
                <title>Carmenta - Resources</title>
            </Head>
            <div className="bg-dark-green w-full h-screen">
                <div className="max-w-7xl mx-auto w-full">
                    <Quote
                        content={quote.content}
                        author={quote.author}
                        color="lilac"
                        relative={false}
                        video="/images/thumbnails/p-r-p.png"
                        videoUrl="https://player.vimeo.com/video/888891207?h=95f412588c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        setPlay={playVideo}>
                        <div className="relative">
                            <div>
                                <div className="text-white font-sans text-xl xl:mt-36 mt-8 text-center md:text-left sm:-ml-28 -ml-6 md:ml-0">
                                    <div className="font-bold">
                                        How we work - Project Management Mastery
                                    </div>
                                    <div className="font-extralight font-helvetica">
                                        Rich Fires & Peter Wijngaard
                                    </div>
                                </div>
                            </div>
                            <Link
                                to="view"
                                smooth={true}
                                className="hidden sm:block">
                                <div className="w-fit xl:mt-20 mt-10 cursor-pointer mx-auto xl:ml-0 sm:pr-28">
                                    <div className="text-xl">Scroll Down</div>
                                    <ChevronDownIcon className="w-4 h-4 mx-auto" />
                                </div>
                            </Link>
                        </div>
                    </Quote>
                </div>
            </div>

            <div id="view" className="max-w-7xl mx-auto w-full">
                <div className="grid sm:grid-cols-5 sm:mt-20 mt-16 sm:mb-24 px-2">
                    <div className="flex col-span-4">
                        <div className="bg-lilac text-white flex items-center justify-between p-4">
                            <MagnifyingGlassIcon className="w-8 h-8" />
                        </div>
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search Key Word(s)"
                            className="w-full outline-none text-light-grey px-8 text-xl"
                        />
                    </div>
                </div>
                <div className="text-dark-grey px-4 text-xl col-span-4 mb-4 rounded-r py-2">
                    <span className="text-orange">*</span>Pending Approval
                </div>
                {currentAccordions.map((accordion, index) => (
                    <div
                        key={accordion.id}
                        id={accordion.id}
                        className={classNames('px-2', index && 'mt-8')}>
                        <Accordion
                            key={index}
                            title={accordion.title}
                            className="bg-orange font-bold"
                            root
                            color={accordion.color}
                            search={search}
                            open={open.includes(index)}
                            videos={accordion.videos}
                            videoTitles={accordion.videoTitles}
                            videoDescriptions={accordion.videoDescriptions}
                            thumbnails={accordion.thumbnails}
                            playVideo={playVideo}
                            dark>
                            <div className="grid grid-cols-5">
                                <div className="sm:col-span-4 col-span-5 gap-4">
                                    <div
                                        className={classNames(
                                            'sm:grid gap-1 mt-4',
                                            !['line', 'table'].includes(accordion.type) &&
                                            'sm:grid-cols-2',
                                        )}>
                                        {accordion.items.map((item, key) => (
                                            <div key={`${index}-${key}`}>
                                                <DropdownItem
                                                    playVideo={playVideo}
                                                    title={item.title}
                                                    label={item.label}
                                                    brief={item.brief}
                                                    pending={item.pending}
                                                    description={
                                                        item.description
                                                    }
                                                    icons={item.icons}
                                                    link={item.link}
                                                    download={item.download}
                                                    vertical={
                                                        !!item.description
                                                    }
                                                    items={item.items}
                                                    type={accordion.type}
                                                    directoryOpen={directoryOpen.includes(key)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Accordion>
                    </div>
                ))}
            </div>

            {play && (
                <dialog
                    className="dui-modal bg-black z-[9999]"
                    open={play}
                    onClick={() => setPlay(false)}>
                    <form method="dialog" className="modal-box relative">
                        <button
                            onClick={() => setPlay(false)}
                            className="dui-btn dui-btn-circle dui-btn-outline text-white bg-black absolute sm:-right-6 left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 -top-6 hover:bg-black hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <ReactPlayer
                            url={play}
                            className="!w-full sm:!w-[80vw] sm:!h-[45vw]"
                            playing
                            controls
                        />
                    </form>
                </dialog>
            )}
        </AppLayout>
    )
}

export default Resources
