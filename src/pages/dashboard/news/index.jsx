import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { useRouter } from 'next/router'

import Accordion from '@/components/Accordion'
import AppLayout from '@/components/Layouts/AppLayout'
import Quote from '@/components/Quote'
import NewsSection from '@/components/NewsSection'
import DropdownGroup from '@/components/DropdownGroup'
import classNames from 'classnames'
import DropdownItem from '@/components/DropdownItem'

import {
    ArrowDownTrayIcon,
    ArrowTopRightOnSquareIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'
import ReactPlayer from 'react-player'

const News = () => {
    const quote = {
        content: <>If you want to have good ideas, you must have many ideas.</>,
        author: 'Linus Pauling',
        url:
            'https://player.vimeo.com/video/914778632?h=b01594d5a9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    }

    const release = {
        title: 'Metsera Launches',
        download:
            '/pdfs/Metsera Launch Press Release 4.18.2024 7am ET_FINAL_no embargo.pdf',
    }

    const router = useRouter()
    const [open, setOpen] = useState([])
    const [play, setPlay] = useState(false)
    const [search, setSearch] = useState('')
    const [directoryOpen, setDirectoryOpen] = useState([])
    const [subOpen, setSubOpen] = useState([])

    const [directoryOpenW, setDirectoryOpenW] = useState([])
    const [subOpenW, setSubOpenW] = useState([])

    const addDirectoryOpen = value => {
        setDirectoryOpen([...directoryOpen, value])
    }
    const handleSet = value => {
        setOpen([])
        setSubOpen([])
        setDirectoryOpen(value)
    }

    const handleOpen = index => {
        if (index == open)
            router.push(`/dashboard/news`, undefined, {
                scroll: false,
            })
        else
            router.push(`/dashboard/news?tab=${index}`, undefined, {
                scroll: false,
            })
    }

    const handleLink = link => {
        window.open(link, '_blank')
    }
    const handleDownload = download => {
        const a = document.createElement('a')
        a.href = download
        a.download = download.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    const playVideo = link => {
        setPlay(link)
    }

    const news = [
        {
            title: '2023',
            icons: [ChevronRightIcon],
            items: [
                {
                    title: '2023 Q3',
                    icons: [ChevronRightIcon],
                    items: [
                        {
                            title:
                                'Lilly announces high-dose tirzepatide trial',
                            download:
                                '/downloads/news/competitive_reports/Metsera_Report_230914.pdf',
                        },
                        {
                            title: 'Oral GLP-1RA GSBR1290 Phase 1b data',
                            download:
                                '/downloads/news/competitive_reports/Metsera_Report_230929.pdf',
                        },
                    ],
                },
                {
                    title: '2023 Q4',
                    icons: [ChevronRightIcon],
                    items: [
                        {
                            title:
                                'Novo Nordisk announces premature discontinuation of FLOW trial for efficacy',
                            download:
                                '/downloads/news/competitive_reports/Metsera_Report_231010.pdf',
                        },
                        {
                            title:
                                'Lilly and BioAge collaborate on trial of combo of tirzepatide and an apelin analog to assess weight loss while preserving lean body mass',
                            download:
                                '/downloads/news/competitive_reports/Metsera_Report_231028.pdf',
                        },
                        {
                            title:
                                'EMA panel concludes that available evidence does not support link between GLP-1RAs and thyroid cancer',
                            download:
                                '/downloads/news/competitive_reports/Metsera_Report_231030.pdf',
                        },
                        {
                            title:
                                'Key insights from Novo’s and Lilly’s quarterly calls',
                            download:
                                '/downloads/news/competitive_reports/Metsera_Report_231102.pdf',
                        },
                        {
                            title:
                                'Novo Nordisk Investor Update — a focused healthcare company',
                            download:
                                '/downloads/news/competitive_reports/Investor Update_Presentation_Novo Nordisk_For Full Year 2023.pdf',
                        },
                    ],
                },
            ],
        },
        {
            title: '2024',
            icons: [ChevronRightIcon],
            items: [
                {
                    title: '2024 Q1',
                    icons: [ChevronRightIcon],
                    items: [
                        {
                            title:
                                'Competitive Intelligence - SciWind Oral GLP1 (XW-004)',
                            download:
                                '/downloads/news/competitive_reports/Competitive Intelligence - SciWind Oral GLP1 (XW-004)_2024_01_24.pdf',
                        },
                        {
                            title:
                                'Key insights from Novo Nordisk’s quarterly/full-year 2023 call',
                            download:
                                '/downloads/news/competitive_reports/Metsera_Report_240131.pdf',
                        },
                        {
                            title:
                                'Novo Holdings Takes Catalent Private and Novo Nordisk Acquires Three Sites',
                            download:
                                '/downloads/news/competitive_reports/Metsera_Report_240205.pdf',
                        },
                        {
                            title:
                                'VK2735 (Viking Therapeutics) GLP-1/GIP read-out',
                            download:
                                '/downloads/news/competitive_reports/Competitive Intelligence - VK2735 Phase 2 Update)2024_02_27.pdf',
                        },
                        {
                            title:
                                'Novo Nordisk announces 24% reduction in kidney/cardiac events in patients with CKD and T2DM',
                            download:
                                '/downloads/news/competitive_reports/Competitive Intelligence - FLOW Trial (semaglutide)_2024_03_05 .pdf',
                        },
                        {
                            title:
                                'Viking Therapeutics releases oral GLP-1RA/GIP data',
                            download:
                                '/downloads/news/competitive_reports/CI Trial update Viking_2024_03_26.pdf',
                        },
                        {
                            title: 'Key insights from Lilly’s quarterly call',
                            download:
                                '/downloads/news/competitive_reports/Investor Update_CI Update_Lilly_2024_02_06.pdf',
                        },
                        {
                            title: 'Amgen Reports Q1 2024 Earnings',
                            download:
                                '/downloads/news/competitive_reports/Competitive Intelligence Update - Amgen Q1 2024 Earnings.pdf',
                        },
                        {
                            title: 'Lilly Reports Q1 2024 Earnings',
                            download:
                                '/downloads/news/competitive_reports/Competitive Intelligence Update - Lilly Q1 2024 Earnings_2024_04_30.pdf',
                        },
                        {
                            title: 'Novo Reports Q1 2024 Earnings',
                            download:
                                '/downloads/news/competitive_reports/Competitive Intelligence Update - Novo Q1 2024 Earnings)2024_05_03.pdf',
                        },
                    ],
                },
                {
                    title: '2024 Q2',
                    icons: [ChevronRightIcon],
                    items: [
                        {
                            title:
                                'Lilly reports positive data for SURMOUNT-OSE',
                            download:
                                '/downloads/news/competitive_reports/CI Trial update Lilly_2024_04_17.pdf',
                        },
                        {
                            title: 'Novo partners with Metaphore',
                            download:
                                '/downloads/news/competitive_reports/CI BD Update_Novo_2024_05_13.pdf',
                        },
                    ],
                },
            ],
        },
    ]

    const newsW = [
        {
            title: '2024 Q1',
            icons: [ChevronRightIcon],
            items: [
                {
                    title:
                        'Jan 22 - 29, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Business Intelligence Newsletter (Jan 22 – 29_ 2024).pdf',
                },
                {
                    title:
                        'Jan 29 - Feb 5, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Jan 29 – Feb 5_ 2024).pdf',
                },
                {
                    title:
                        'Feb 5 - 12, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Feb 5 – 12_ 2024).pdf',
                },
                {
                    title:
                        'Feb 20 - 26, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Feb 20 – 26_ 2024).pdf',
                },
                {
                    title:
                        'Feb 27 - Mar 4, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Feb 27 – Mar 4_ 2024).pdf',
                },
                {
                    title:
                        'Mar 5 - 11, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Mar 5 - 11_ 2024).pdf',
                },
                {
                    title:
                        'Mar 12 - 18, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Mar 12-18_ 2024).pdf',
                },
                {
                    title:
                        'Mar 19 - 26, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Mar 19-26_ 2024).pdf',
                },
                {
                    title:
                        'Mar 27 - Apr 1, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Mar 27- Apr 1_ 2024).pdf',
                },
            ],
        },
        {
            title: '2024 Q2',
            icons: [ChevronRightIcon],
            items: [
                {
                    title:
                        'Apr 2 - 8, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Apr 2-8_ 2024).pdf',
                },
                {
                    title:
                        'Apr 9 - 15, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Apr 9-15_ 2024).pdf',
                },
                {
                    title:
                        'Apr 16 - 22, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Apr 16-22_ 2024).pdf',
                },
                {
                    title:
                        'Apr 23 - 29, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Apr 23-29_ 2024).pdf',
                },
                {
                    title:
                        'Apr 30 - May 6, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (Apr 30 - May 6_ 2024).pdf',
                },
                {
                    title:
                        'May 7 - 13, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (May 7 - 13_ 2024).pdf',
                },
                {
                    title:
                        'May 14 - 20, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_Weekly Competitive Intelligence Newsletter (May 14 - May 20_ 2024).pdf',
                },
                {
                    title:
                        'May 21 - 27, 2024',
                    download:
                        '/downloads/news/sai/MTSR1_ Weekly Competitive Intelligence Newsletter (May 21 - 27_ 2024).pdf',
                },
            ],
        },
    ]

    const overviewContent1 = (
        <div className="bg-white col-span-2 text-black py-8 sm:px-16 px-8 text-dark-grey">
            <div className="text-orange text-sm">May 22, 2024</div>
            <div className="text-mid-green font-black text-2xl">
                WEGOVY SUMMARY
            </div>
            <div className="my-4">
                Step 1: Patients randomized 2:1 to receive semaglutide 2.4 mg SQ
                QW for 68 weeks or matching placebo in addition to lifestyle
                intervention, followed by a 7 week period without any
                intervention. Semaglutide was administered in a prefilled
                injector, initiated at 0.25 mg once weekly for the first 4
                weeks, with the dose increased every 4 weeks to achieve target
                maintenance dose of 2.4 mg weekly by week 16 (lower maintenance
                doses were permitted if participants had unacceptable side
                effects at 2.4mg dose) 52 weeks on max dose (would need CTR to
                see results or how many achieved max dose)
            </div>
            <div className="my-4">
                Step 2: Patients randomized 1:1:1 to receive semaglutide 2.4 mg,
                semaglutide 1 mg or placebo SQ QW for 68 weeks or matching
                placebo in addition to lifestyle intervention, followed by a 7
                week period without any intervention. Semaglutide was
                administered in a prefilled injector, initiated at 0.25 mg once
                weekly for the first 4 weeks, with the dose increased every 4
                weeks to achieve target maintenance dose of 2.4 mg weekly by
                week 16 (lower maintenance doses were permitted if participants
                had unacceptable side effects at 2.4mg dose) 52 weeks on max
                dose (would need CTR to see results or how many achieved max
                dose)
            </div>
            <div className="my-4">
                Step 3: Patients randomized 2:1 to receive semaglutide 2.4 mg SQ
                QW for 68 weeks or matching placebo in addition to intensive
                behavioral therapy with an offtreatment follow-up period of 7
                weeks. Semaglutide was administered in a prefilled injector,
                initiated at 0.25 mg once weekly for the first 4 weeks, with the
                dose increased every 4 weeks to achieve target maintenance dose
                of 2.4 mg weekly by week 16 (lower maintenance doses were
                permitted if participants had unacceptable side effects at 2.4mg
                dose) 52 weeks on max dose (would need CTR to see results or how
                many achieved max dose)
            </div>
            <div className="my-4">
                Step 4: 902 patients (all received Semaglutide titrated to 2.4
                mg for the first 20 weeks, including 16 week escalation). Then
                803 patients Patients randomized 2:1 to continue semaglutide 2.4
                mg SQ QW or matching placebo for 48 weeks. Throughout the 68
                weeks, all patients underwent lifestyle intervention, followed
                by a 7 week period without any intervention. Semaglutide was
                administered in a prefilled injector, initiated at 0.25 mg once
                weekly for the first 4 weeks, with the dose increased every 4
                weeks to achieve target maintenance dose of 2.4 mg weekly by
                week 16 (lower maintenance doses were permitted if participants
                had unacceptable side effects at 2.4mg dose) 52 weeks on max
                dose
            </div>
            <div className="my-4">
                Step 5: Patients randomized 1:1 to receive semaglutide 2.4 mg SQ
                QW for 104 weeks or matching placebo as adjunct to a
                reduced-calorie diet and increased physical activity with an
                off-treatment follow-up period of 7 weeks. Semaglutide was
                administered in a prefilled injector, initiated at 0.25 mg once
                weekly for the first 4 weeks, with the dose increased every 4
                weeks to achieve target maintenance dose of 2.4 mg weekly by
                week 16 (lower maintenance doses were permitted if participants
                had unacceptable side effects at 2.4mg dose) 88 weeks on max
                dose
            </div>
            <div className="flex gap-4">
                <button
                    onClick={() =>
                        handleDownload(
                            '/pdfs/reports/Metsera_Summary_Semaglutide_240521_02.pdf',
                        )
                    }
                    className="bg-mid-green rounded-full text-white flex items-center justify-between text-xs font-bold px-6 py-2">
                    Download
                </button>
                {/* <ArrowDownTrayIcon className="w-8 h-8 cursor-pointer" /> */}
            </div>
        </div>
    )
    const overviewContent2 = (
        <div className="bg-white col-span-2 text-black py-8 sm:px-16 px-8 text-dark-grey">
            <div className="text-orange text-sm">May 14, 2024</div>
            <div className="text-mid-green font-black text-2xl">
                SURMOUNT TRIAL STUDIES
            </div>
            <div className="my-4">
                <div className="text-orange">
                    SURMOUNT 4 (Phase 3 double-blind RCT)
                </div>
                670 patients randomized 1:1 to receive tirzepatide max tolerated
                dose (10 or 15 mg) or placebo SQ QW over 88 weeks. The study
                design included a 36 week open-label lead-in on Tirzepatide MTD
                and a 52 week double-blind treatment period on Tirzepatide or
                placebo. This included a 20 week dose escalation period starting
                with tirzepatide 2.5 mg QW x 4 weeks and increased weekly until
                assigned dose was achieved. Study Start 29-Mar-2021 to
                18-May-2023 70 sites in 4 countries (US, Argentina, Brazil,
                Taiwan)
            </div>
            <div className="my-4">
                <div className="text-orange">
                    SURMOUNT-3 (Phase 3 double-blind RCT)
                </div>
                579 patients who had ≥5% weight loss by the end of the 12-week
                lead-in period were randomized 1:1 to receive Tirzepatide Max
                Tolerated Dose (10mg or 15mg) or placebo SQ QW for 72 weeks.
                This included a 20 week dose escalation period starting with
                tirzepatide 2.5 mg QW x 4 weeks and increased weekly until max
                tolerated dose was achieved. During the 12-week lead-in,
                participants followed a low-calorie diet (1200 kcal/day for
                women, 1500 kcal/day for men), which may have included up to two
                liquid meal replacements per day. Participants were encouraged
                to perform at least 150 minutes per week of moderate intensity
                activity. Participants were also counseled on behavior
                modification strategies to help implement and adhere to the diet
                and exercise recommendations. Study Start 12-Apr-2021 to
                03-Sep-2021 65 sites in 4 countries US, Argentina, Brazil, and
                Puerto Rico
            </div>
            <div className="my-4">
                <div className="text-orange">
                    SURMOUNT-2 (Phase 3 double-blind RCT)
                </div>
                938 patients randomized 1:1:1 to receive tirzepatide 10mg, 15mg,
                or placebo SQ QW for 72 weeks. This included a 20 week dose
                escalation period starting with tirzepatide 2.5 mg QW x 4 weeks
                and increased weekly until assigned dose was achieved. Study
                Start 29-Mar-2021 to 10-Apr-2023 77 sites in 7 countries (US,
                Argentina, Brazil, India, Japan, Russia, Taiwan)
            </div>
            <div className="my-4">
                <div className="text-orange">
                    SURMOUNT-1 (Phase 3 double-blind RCT)
                </div>
                2539 patients randomized 1:1:1:1 to receive tirzepatide 5mg,
                10mg, 15mg, or placebo SQ QW for 72 weeks. This included a 20
                week dose escalation period starting with tirzepatide 2.5 mg QW
                x 4 weeks and increased weekly until assigned dose was achieved.
                Study Start December 2019-April 2022 119 sites in 9 countries
                (US, Argentina, Brazil, China, India, Japan, Mexico, Russia and
                Taiwan)
            </div>
            <div className="flex gap-4">
                <button
                    onClick={() =>
                        handleDownload(
                            '/pdfs/reports/Metsera_Surmount_Summary_240430_01.pdf',
                        )
                    }
                    className="bg-mid-green rounded-full text-white flex items-center justify-between text-xs font-bold px-6 py-2">
                    Download
                </button>
                {/* <ArrowDownTrayIcon className="w-8 h-8 cursor-pointer" /> */}
            </div>
        </div>
    )
    const overviews = [
        {
            date: 'May 22, 2024',
            title: 'Semaglutide',
            icon: [ArrowDownTrayIcon],
            content: overviewContent1,
        },
        {
            date: 'May 14, 2024',
            title: 'Tirzepatide',
            icon: [ArrowDownTrayIcon],
            content: overviewContent2,
        },
    ]
    const content1 = (
        <div className="bg-white col-span-2 text-black py-8 sm:px-16 px-8 text-dark-grey">
            <div className="text-orange text-sm">
                July 21, 2022 | New England Journal of Medicine
            </div>
            <div className="text-mid-green font-black text-2xl">
                Tirzepatide Once Weekly for the Treatment of Obesity
            </div>
            <div className="my-4">
                <div className="uppercase">Background</div>
                Obesity is a chronic disease that results in substantial global
                morbidity and mortality. The efficacy and safety of tirzepatide,
                a novel glucose-dependent insulinotropic polypeptide and
                glucagon-like peptide-1 receptor agonist, in people with obesity
                are not known.
            </div>
            <div className="my-4">
                <div className="uppercase">METHODS</div>
                In this phase 3 double-blind, randomized, controlled trial, we
                assigned 2539 adults with a body-mass index (BMI; the weight in
                kilograms divided by the square of the height in meters) of 30
                or more, or 27 or more and at least one weight-related
                complication, excluding diabetes, in a 1:1:1:1 ratio to receive
                once-weekly, subcutaneous tirzepatide (5 mg, 10 mg, or 15 mg) or
                placebo for 72 weeks, including a 20-week dose-escalation
                period. Coprimary end points were the percentage change in
                weight from baseline and a weight reduction of 5% or more. The
                treatment-regimen estimand assessed effects regardless of
                treatment discontinuation in the intention-to-treat population.
            </div>
            <div className="my-4">
                <div className="uppercase">Results</div>
                At baseline, the mean body weight was 104.8 kg, the mean BMI was
                38.0, and 94.5% of participants had a BMI of 30 or higher. The
                mean percentage change in weight at week 72 was −15.0% (95%
                confidence interval [CI], −15.9 to −14.2) with 5-mg weekly doses
                of tirzepatide, −19.5% (95% CI, −20.4 to −18.5) with 10-mg
                doses, and −20.9% (95% CI, −21.8 to −19.9) with 15-mg doses and
                −3.1% (95% CI, −4.3 to −1.9) with placebo (P&#x3c;0.001 for all
                comparisons with placebo). The percentage of participants who
                had weight reduction of 5% or more was 85% (95% CI, 82 to 89),
                89% (95% CI, 86 to 92), and 91% (95% CI, 88 to 94) with 5 mg, 10
                mg, and 15 mg of tirzepatide, respectively, and 35% (95% CI, 30
                to 39) with placebo; 50% (95% CI, 46 to 54) and 57% (95% CI, 53
                to 61) of participants in the 10-mg and 15-mg groups had a
                reduction in body weight of 20% or more, as compared with 3%
                (95% CI, 1 to 5) in the placebo group (P&#x3c;0.001 for all
                comparisons with placebo). Improvements in all prespecified
                cardiometabolic measures were observed with tirzepatide. The
                most common adverse events with tirzepatide were
                gastrointestinal, and most were mild to moderate in severity,
                occurring primarily during dose escalation. Adverse events
                caused treatment discontinuation in 4.3%, 7.1%, 6.2%, and 2.6%
                of participants receiving 5-mg, 10-mg, and 15-mg tirzepatide
                doses and placebo, respectively.
            </div>
            <div className="flex gap-4">
                <button
                    onClick={() =>
                        handleLink(
                            'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038',
                        )
                    }
                    className="bg-mid-green rounded-full text-white flex items-center justify-between text-xs font-bold px-6 py-2">
                    Full Publication
                </button>
                {/* <ArrowDownTrayIcon className="w-8 h-8 cursor-pointer" /> */}
            </div>
        </div>
    )
    const content2 = (
        <div className="bg-white col-span-2 text-black py-8 sm:px-16 px-8 text-dark-grey">
            <div className="text-orange text-sm">
                September 15, 2023 | Katie Kerwin McCrimmon, UCHealth
            </div>
            <div className="text-mid-green font-black text-2xl">
                Demand for Wegovy could surge even higher after study finds
                weight loss drug sharply cuts heart attacks, strokes and cardiac
                deaths
            </div>
            <div className="my-4">
                The blockbuster new weight loss drugs, Wegovy and Ozempic, could
                become even more popular now that researchers have found that
                injections of semaglutide — the drug in Wegovy and Ozempic —
                sharply cut heart attacks, strokes and cardiac deaths in
                addition to helping people lose a significant percentage of
                weight.
            </div>
            <div className="my-4">
                New information related to the weight loss drugs is emerging as
                research continues, and patients who want to shed pounds clamor
                to try Wegovy, Ozempic and a competing drug called Mounjaro.
            </div>
            <div className="my-4">
                UCHealth expert, Dr. Cecilia Low Wang, predicts that the study
                results related to the cardiovascular effects of semaglutide —
                the generic name for the drug used in Wegovy and Ozempic — could
                have far-reaching impacts.
            </div>
            <div className="my-4">
                That’s because researchers found that the risk of adverse
                cardiovascular events dropped by about 20% for study volunteers
                who took Wegovy compared to those who received a placebo
                injection.
            </div>
            <div className="my-4">
                “The cardiovascular benefits are really significant,” said Low
                Wang, an expert on endocrinology, diabetes and metabolism and a
                professor at the University of Colorado School of Medicine on
                the Anschutz Medical Campus.
            </div>
            <div className="my-4">
                “Cardiovascular disease is a leading cause of death in the U.S.,
                and if we can prevent adverse cardiovascular events such as
                heart attacks and strokes, and help people lead longer, heathier
                lives, that’s a major finding,” she said.
            </div>
            <div className="flex gap-4">
                <button
                    onClick={() =>
                        handleLink(
                            'https://www.uchealth.org/today/wegovy-study-finds-weight-loss-drug-semaglutide-cuts-heart-attacks-strokes-cardiac-deaths',
                        )
                    }
                    className="bg-mid-green rounded-full text-white flex items-center justify-between text-xs font-bold px-6 py-2">
                    Full Publication
                </button>
                {/* <ArrowDownTrayIcon className="w-8 h-8 cursor-pointer" /> */}
            </div>
        </div>
    )
    const publications = [
        {
            date: 'July 21, 2022 | New England Journal of Medicine',
            title: 'Tirzepatide Once Weekly for the...',
            icon: [ArrowDownTrayIcon],
            content: content1,
        },
        {
            date: 'September 15, 2023 | Katie Kerwin McCrimmon, UCHealth',
            title: 'Demand for Wegovy could surge...',
            icon: [ArrowDownTrayIcon],
            content: content2,
        },
    ]
    const [currentAccordions, setCurrentAccordions] = useState(news)
    const [currentAccordionsW, setCurrentAccordionsW] = useState(newsW)

    const [currentOverviews, setCurrentOverviews] = useState(overviews)
    const [currentPublications, setCurrentPublications] = useState(publications)

    useEffect(() => {
        if (search) {
            const newDirectoryOpen = []
            const newOpen = []
            const newSub = []
            const list = news.map((newsY, index) => {
                const tp = `${index}_`
                const tmp = newsY.items.map((news, idx) => {
                    let filterItems = news.items.filter((item, key) => {
                        return item.title
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    })
                    if (filterItems.length) {
                        newOpen.push(1)
                        newOpen.push(5)
                        newSub.push(tp + idx)
                        newDirectoryOpen.push(index)
                    }
                    return {
                        title: news.title,
                        icons: news.icons,
                        items: filterItems,
                    }
                })
                return {
                    title: newsY.title,
                    icons: newsY.icons,
                    items: tmp,
                }
            })

            setDirectoryOpen(newDirectoryOpen)
            setSubOpen(newSub)
            setCurrentAccordions(list)

            const newDirectoryOpenW = []
            const newSubW = []
            const listW = newsW.map((newsY, index) => {
                const tp = `${index}_`
                const filterItems = newsY.items.filter((item, idx) => {
                    return item.title
                        .toLowerCase()
                        .includes(search.toLowerCase())
                })
                if (filterItems.length) {
                    newOpen.push(6)
                    newDirectoryOpenW.push(index)
                }
                return {
                    title: newsY.title,
                    icons: newsY.icons,
                    items: filterItems,
                }
            })
            setDirectoryOpenW(newDirectoryOpenW)
            setCurrentAccordionsW(listW)

            let newOverviews = overviews.filter(overview =>
                overview.title.toLowerCase().includes(search.toLowerCase()),
            )
            setCurrentOverviews(newOverviews)

            if (newOverviews.length) {
                newOpen.push(2)
            }
            if (
                'Metsera Launches to Lead the Next Generation of ...'
                    .toLowerCase()
                    .includes(search.toLowerCase())
            )
                newOpen.push(3)
            let newPublifications = publications.filter(publication =>
                publication.title.toLowerCase().includes(search.toLowerCase()),
            )
            if (newPublifications.length) {
                newOpen.push(4)
            }
            setCurrentPublications(newPublifications)

            setOpen(newOpen)
        } else {
            setOpen([])
            setDirectoryOpen([])
            setCurrentAccordions(news)
            setCurrentOverviews(overviews)
            setCurrentPublications(publications)
        }
    }, [search])

    useEffect(() => {
        setSearch('')
        const tab = router.query.tab
        setOpen([Number(tab) || 0])

        if (tab !== undefined) {
            const tabToDivId = {
                0: 'view',
                1: 'competitive_reports',
                2: 'releases',
                3: 'publications',
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
        <AppLayout>
            <Head>
                <title>Carmenta - News</title>
            </Head>

            <Quote
                content={quote.content}
                author={quote.author}
                color="blue"
                relative={false}
                video="/images/thumbnails/t-n-b.png"
                videoUrl="https://player.vimeo.com/video/914778632?h=b01594d5a9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                setPlay={playVideo}>
                <div className="relative">
                    <div>
                        <div className="text-white font-sans text-xl xl:mt-48 mt-8 text-center md:text-left sm:-ml-286 md:ml-0 mx-4 sm:mx-0">
                            <div className="font-bold">
                                Our 360-degree view of the world
                            </div>
                            <div className="font-extralight font-helvetica">
                                Tamsin Berry & Nancye Green
                            </div>
                        </div>
                    </div>
                    <Link to="view" smooth={true} className="hidden sm:block">
                        <div className="w-fit xl:mt-36 mt-10 cursor-pointer mx-auto xl:ml-0 sm:pr-28">
                            <div className="text-xl">Scroll Down</div>
                            <ChevronDownIcon className="w-4 h-4 mx-auto" />
                        </div>
                    </Link>
                </div>
            </Quote>

            <div id="view" className="col-span-5 sm:mt-80">
                <NewsSection
                    title="Latest News"
                    open={open == 0}
                    setOpen={() => handleOpen(0)}
                    content={
                        <>
                            <div
                                onClick={() =>
                                    handleDownload(
                                        '/pdfs/reports/Metsera Launch Press Release 4.18.2024.pdf',
                                    )
                                }
                                className="px-4 py-2 flex items-center gap-3 cursor-pointer">
                                <ArrowDownTrayIcon className="w-6 h-6 min-w-[24px] cursor-pointer" />
                                Metsera Launches to Lead the Next Generation of
                                Medicines for...
                            </div>
                            <div
                                onClick={() =>
                                    handleDownload(
                                        '/pdfs/reports/Metsera_Report_240205.pdf',
                                    )
                                }
                                className="px-4 py-2 flex items-center gap-3 cursor-pointer">
                                <ArrowDownTrayIcon className="w-6 h-6 min-w-[24px] cursor-pointer" />
                                Metsera Reports: Novo Holdings Takes Catalent
                                Private and…
                            </div>
                            <div
                                onClick={() =>
                                    handleDownload(
                                        '/downloads/tools_software/templates/powerpoint_tutorial/Metsera_PPT_5.mp4',
                                    )
                                }
                                className="px-4 py-2 flex items-center gap-3 cursor-pointer">
                                <ArrowDownTrayIcon className="w-6 h-6 min-w-[24px] cursor-pointer" />
                                PPT Template Video Tutorial
                            </div>
                            <div
                                onClick={() =>
                                    handleLink(
                                        'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038',
                                    )
                                }
                                className="px-4 py-2 flex items-center gap-3 cursor-pointer">
                                <ArrowTopRightOnSquareIcon className="w-6 h-6 min-w-[24px] cursor-pointer" />
                                Tirzepatide Once Weekly for the Treatment of
                                Obesity
                            </div>
                        </>
                    }
                />
            </div>

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

            <div id="competitive_reports" className="mt-16 px-2">
                <Accordion
                    title="Competitive Reports"
                    className="bg-orange font-bold"
                    color="orange"
                    root
                    subMenu={false}
                    search={search}
                    setDirectory={handleSet}
                    open={open.includes(1)}
                    setOpen={() => handleOpen(1)}>
                    <div className="grid grid-cols-5">
                        <div className="sm:col-span-6 col-span-5 gap-4">
                            <div
                                className={classNames(
                                    'sm:grid gap-1 mt-6 sm:grid-cols-1',
                                )}>
                                <Accordion
                                    title="Competitive Intelligence Reports"
                                    className="bg-orange font-bold"
                                    color="white"
                                    root
                                    subMenu={5}
                                    search={search}
                                    setDirectory={handleSet}
                                    open={open.includes(5)}
                                    setOpen={() => handleOpen(5)}>
                                    <div className="grid grid-cols-5">
                                        <div className="sm:col-span-4 col-span-5 gap-4">
                                            <div
                                                className={classNames(
                                                    'sm:grid gap-1 mt-4 sm:grid-cols-1',
                                                )}>
                                                {currentAccordions.map(
                                                    (item, key) => (
                                                        <div key={`${key}`}>
                                                            <DropdownItem
                                                                playVideo={
                                                                    playVideo
                                                                }
                                                                title={
                                                                    item.title
                                                                }
                                                                label={
                                                                    item.label
                                                                }
                                                                brief={
                                                                    item.brief
                                                                }
                                                                pending={
                                                                    item.pending
                                                                }
                                                                description={
                                                                    item.description
                                                                }
                                                                icons={
                                                                    item.icons
                                                                }
                                                                link={item.link}
                                                                download={
                                                                    item.download
                                                                }
                                                                vertical={
                                                                    !!item.description
                                                                }
                                                                key0={key}
                                                                items={
                                                                    item.items
                                                                }
                                                                addDirectoryOpen={
                                                                    addDirectoryOpen
                                                                }
                                                                directoryOpen={directoryOpen.includes(
                                                                    key,
                                                                )}
                                                                subMenu={5}
                                                                sub={subOpen}
                                                                pos={true}
                                                            />
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Accordion>
                                <div className="mb-5"></div>
                                <Accordion
                                    title="SAI Competitive Intelligence Weekly Newsletters"
                                    className="bg-orange font-bold"
                                    color="white"
                                    root
                                    subMenu={6}
                                    search={search}
                                    setDirectory={handleSet}
                                    open={open.includes(6)}
                                    setOpen={() => handleOpen(6)}>
                                    <div className="grid grid-cols-5">
                                        <div className="sm:col-span-4 col-span-5 gap-4">
                                            <div
                                                className={classNames(
                                                    'sm:grid gap-1 mt-4 sm:grid-cols-1',
                                                )}>
                                                {currentAccordionsW.map(
                                                    (item, key) => (
                                                        <div key={`${key}`}>
                                                            <DropdownItem
                                                                playVideo={
                                                                    playVideo
                                                                }
                                                                title={
                                                                    item.title
                                                                }
                                                                label={
                                                                    item.label
                                                                }
                                                                brief={
                                                                    item.brief
                                                                }
                                                                pending={
                                                                    item.pending
                                                                }
                                                                description={
                                                                    item.description
                                                                }
                                                                icons={
                                                                    item.icons
                                                                }
                                                                link={item.link}
                                                                download={
                                                                    item.download
                                                                }
                                                                vertical={
                                                                    !!item.description
                                                                }
                                                                key0={key}
                                                                items={
                                                                    item.items
                                                                }
                                                                // addDirectoryOpen={
                                                                //     addDirectoryOpen
                                                                // }
                                                                subMenu={6}
                                                                directoryOpen={directoryOpenW.includes(
                                                                    key,
                                                                )}
                                                                sub={subOpen}
                                                                pos={true}
                                                            />
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </Accordion>
            </div>
            <div id="competitive_overview" className="mt-16 px-2">
                <Accordion
                    title="Competitive Trial Overview"
                    className="bg-sky-600 font-bold"
                    color="sky-600"
                    root
                    setDirectory={handleSet}
                    open={open.includes(2)}
                    setOpen={() => handleOpen(2)}>
                    <div className="grid grid-cols-5">
                        <div className="sm:col-span-4 col-span-5 gap-4">
                            <div className="sm:sm:grid sm:grid-cols-2 gap-x-1.5 mt-1.5">
                                {currentOverviews.length ? (
                                    <DropdownGroup
                                        color="orange"
                                        dates={currentOverviews.map(
                                            overviews => overviews.date,
                                        )}
                                        titles={currentOverviews.map(
                                            overviews => overviews.title,
                                        )}
                                        icons={currentOverviews.map(
                                            overviews => overviews.icon,
                                        )}
                                        contents={currentOverviews.map(
                                            overviews => overviews.content,
                                        )}
                                        vertical
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </Accordion>
            </div>

            <div id="releases" className="mt-16 px-2">
                <Accordion
                    title="Press Releases"
                    className="bg-green font-bold"
                    root
                    setDirectory={handleSet}
                    open={open.includes(3)}
                    setOpen={() => handleOpen(3)}>
                    <div className="grid grid-cols-5">
                        <div className="sm:col-span-4 col-span-5 gap-4">
                            <div className="sm:sm:grid sm:grid-cols-2 mt-1.5">
                                {'Metsera Launches to Lead the Next Generation of ...'
                                    .toLowerCase()
                                    .includes(search.toLowerCase()) && (
                                    <DropdownGroup
                                        color="green"
                                        titles={[
                                            'Metsera Launches to Lead the Next Generation of ...',
                                        ]}
                                        icons={[[ArrowDownTrayIcon]]}
                                        contents={[
                                            <div className="bg-white font-candara col-span-2 text-black py-8 sm:px-16 px-8">
                                                <p className="text-black text-lg">
                                                    4.18.2024
                                                </p>
                                                <div className="mb-4 text-center">
                                                    <img
                                                        src="/images/logo-green.png"
                                                        className="mx-auto w-[200px]"
                                                    />
                                                </div>
                                                <div className="font-bold text-lg text-center my-4">
                                                    Metsera Launches to Lead the
                                                    Next Generation of Medicines
                                                    for Obesity and Metabolic
                                                    Diseases
                                                </div>
                                                <div className="my-4 text-center italic">
                                                    Advancing a broad portfolio
                                                    designed to accelerate
                                                    innovation and shape the
                                                    future of treatment for
                                                    weight loss, obesity-related
                                                    conditions and metabolic
                                                    diseases
                                                </div>
                                                <div className="my-4 text-center italic">
                                                    Clinical-stage pipeline
                                                    includes oral and injectable
                                                    incretin, non-incretin and
                                                    combination therapies
                                                    designed with best-in-class
                                                    profiles to address multiple
                                                    targets and meet the future
                                                    needs of a rapidly evolving
                                                    weight loss treatment
                                                    landscape
                                                </div>
                                                <div className="my-4 text-center italic">
                                                    Founded by Population Health
                                                    Partners and ARCH Venture
                                                    Partners; $290 million in
                                                    financing raised from a
                                                    syndicate of leading
                                                    healthcare investors
                                                </div>
                                                <div className="my-4">
                                                    <span className="font-bold text-md">
                                                        NEW YORK, April 18, 2024{' '}
                                                    </span>{' '}
                                                    – Metsera, Inc., a
                                                    clinical-stage
                                                    biopharmaceutical company
                                                    accelerating the next
                                                    generation of medicines for
                                                    obesity and metabolic
                                                    diseases, announced its
                                                    launch today. Founded by
                                                    Population Health Partners
                                                    and ARCH Venture Partners
                                                    and led by former executives
                                                    of The Medicines Company,
                                                    Metsera is rapidly advancing
                                                    a broad portfolio of oral
                                                    and injectable incretin,
                                                    nonincretin and combination
                                                    therapies designed with
                                                    best-in-class profiles to
                                                    address multiple targets and
                                                    meet the future needs of a
                                                    rapidly evolving weight loss
                                                    treatment landscape.
                                                </div>
                                                <div className="my-4">
                                                    “Metsera was purpose-built
                                                    over the last two years to
                                                    get ahead of the innovation
                                                    curve in one of the largest
                                                    and fastest growing markets
                                                    in the history of
                                                    biopharma,” said Clive
                                                    Meanwell, chief executive
                                                    officer of Metsera. “We have
                                                    assembled a portfolio of
                                                    long-acting injectable and
                                                    oral agents to address
                                                    multiple next-generation
                                                    weight loss goals. With a
                                                    proven team of world experts
                                                    across multiple company
                                                    functions, leading
                                                    healthcare investors and
                                                    proprietary health
                                                    technology tools, we are
                                                    wellpositioned to rapidly
                                                    advance our clinical stage
                                                    pipeline and create value
                                                    for patients, health systems
                                                    and investors.”
                                                </div>
                                                <div className="my-4">
                                                    Metsera has raised $290
                                                    million in financing led by
                                                    ARCH Venture Partners with
                                                    participation from other
                                                    leading healthcare investors
                                                    including F-Prime Capital,
                                                    GV, Mubadala Capital,
                                                    Newpath Partners, SoftBank
                                                    Vision Fund 2 and other
                                                    undisclosed investors.
                                                </div>
                                                <div className="my-4">
                                                    “We are in the early days of
                                                    an incredibly exciting new
                                                    era of innovation in weight
                                                    loss and obesityassociated
                                                    diseases,” said Kristina
                                                    Burow, Metsera board member
                                                    and managing director of
                                                    ARCH Venture Partners.
                                                    “Metsera’s portfolio is
                                                    focused beyond the current
                                                    generation of market leaders
                                                    to address the full spectrum
                                                    of future weight loss
                                                    therapeutic needs, including
                                                    effective weight
                                                    maintenance, preserving
                                                    muscle, less-frequent
                                                    dosing, and better efficacy,
                                                    tolerability and patient
                                                    access.”
                                                </div>
                                                <div className="my-4 flex flex-col">
                                                    <div className="font-bold text-md">
                                                        Advancing Broad
                                                        Portfolio of
                                                        Next-generation Weight
                                                        Loss Medicines
                                                    </div>
                                                    Metsera’s portfolio of
                                                    next-generation injectable
                                                    and oral development
                                                    programs is sourced from the
                                                    company’s proprietary
                                                    library of over 20,000 gut
                                                    hormone peptides and
                                                    peptide/antibody conjugates.
                                                    Development programs include
                                                    parallel strategies and are
                                                    focused on multiple
                                                    next-generation targets and
                                                    combinations. These include:
                                                    <ul className="list-disc ml-8 mt-4">
                                                        <li>
                                                            GLP-1 portfolio: led
                                                            by an injectable,
                                                            fully-biased GLP-1
                                                            receptor agonist in
                                                            Phase 1 clinical
                                                            trials with a
                                                            potential
                                                            class-leading
                                                            duration of effect
                                                        </li>
                                                        <li>
                                                            A dual
                                                            amylin/calcitonin
                                                            receptor agonist
                                                            (DACRA) engineered
                                                            for class-leading
                                                            duration of effect
                                                            which is being
                                                            combined with the
                                                            GLP-1 receptor
                                                            agonist
                                                        </li>
                                                        <li>
                                                            A unimolecular GGG
                                                            (GLP-1, GIP,
                                                            Glucagon) engineered
                                                            for class-leading
                                                            duration of effect
                                                            and combination with
                                                            DACRA
                                                        </li>
                                                        <li>
                                                            An oral peptide
                                                            delivery platform,
                                                            including two
                                                            IND-ready candidates
                                                            with potential
                                                            best-inclass
                                                            bioavailability and
                                                            multiple
                                                            first-in-class oral
                                                            follow-on candidates
                                                        </li>
                                                        <li>
                                                            A range of other
                                                            early-stage programs
                                                            and delivery
                                                            modalities
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="my-4">
                                                    “Metsera’s portfolio is
                                                    designed to unlock new
                                                    treatment strategies through
                                                    scalable, sustainable and
                                                    personalized interventions
                                                    for weight loss, weight
                                                    maintenance and disease
                                                    prevention,” said Sir
                                                    Stephen R. Bloom, FMedSci,
                                                    FRS, senior vice president
                                                    of research and development
                                                    at Metsera and head of drug
                                                    development, metabolism,
                                                    digestion and reproduction
                                                    at Imperial College London.
                                                    “Through optimized
                                                    combinations of injectable
                                                    and oral peptides, we aim to
                                                    establish a cycle of
                                                    continuous and responsive
                                                    innovation to address a
                                                    growing worldwide obesity
                                                    crisis.”
                                                </div>
                                                <div className="my-4">
                                                    <div className="font-bold text-md">
                                                        About Metsera
                                                    </div>
                                                    Metsera is a clinical-stage
                                                    biopharmaceutical company
                                                    accelerating the next
                                                    generation of medicines for
                                                    obesity and metabolic
                                                    diseases. Metsera is
                                                    advancing a broad portfolio
                                                    of oral and injectable
                                                    incretin, non-incretin and
                                                    combination therapies with
                                                    potential best-in-class
                                                    profiles to address multiple
                                                    therapeutic targets and meet
                                                    the future needs of a
                                                    rapidly evolving weight loss
                                                    treatment landscape. Founded
                                                    in 2022 by Population Health
                                                    Partners and ARCH Venture
                                                    Partners, Metsera has raised
                                                    $290 million in financing
                                                    from leading healthcare
                                                    investors and is based in
                                                    New York City. For more
                                                    information, please visit us
                                                    at{' '}
                                                    <a
                                                        className="underline text-blue font-normal"
                                                        href="https://metsera.com/"
                                                        target="_blank">
                                                        www.metsera.com
                                                    </a>{' '}
                                                    and follow us on{' '}
                                                    <a
                                                        className="underline text-blue font-normal"
                                                        href="https://www.linkedin.com/company/metsera/about/"
                                                        target="_blank">
                                                        LinkedIn
                                                    </a>
                                                    .
                                                </div>
                                                <div className="my-4 font-bold text-md">
                                                    Contact:
                                                </div>
                                                <div className="mt-4 mb-8">
                                                    <div className="font-bold text-md">
                                                        Media and Investors:
                                                    </div>
                                                    Dan Budwick
                                                    <br />
                                                    1AB
                                                    <br />
                                                    <a
                                                        className="underline text-blue font-normal"
                                                        href="mailto:dan@1abmedia.com">
                                                        dan@1abmedia.com
                                                    </a>
                                                </div>
                                                <div className="flex gap-4">
                                                    <button
                                                        onClick={() =>
                                                            handleDownload(
                                                                release.download,
                                                            )
                                                        }
                                                        className="bg-mid-green rounded-full text-white flex items-center justify-between text-xs font-bold px-6 py-2">
                                                        Download
                                                    </button>
                                                    {/* <ArrowDownTrayIcon className="w-8 h-8 cursor-pointer" /> */}
                                                </div>
                                            </div>,
                                        ]}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Accordion>
            </div>

            <div id="publications" className="mt-16 px-2">
                <Accordion
                    title="Publications"
                    className="bg-yellow font-bold"
                    color="yellow"
                    root
                    setDirectory={handleSet}
                    open={open.includes(4)}
                    setOpen={() => handleOpen(4)}>
                    <div className="grid grid-cols-5">
                        <div className="sm:col-span-4 col-span-5 gap-4">
                            <div className="sm:sm:grid sm:grid-cols-2 gap-x-1.5 mt-1.5">
                                {currentPublications.length ? (
                                    <DropdownGroup
                                        color="orange"
                                        dates={currentPublications.map(
                                            publications => publications.date,
                                        )}
                                        titles={currentPublications.map(
                                            publications => publications.title,
                                        )}
                                        icons={currentPublications.map(
                                            publications => publications.icon,
                                        )}
                                        contents={currentPublications.map(
                                            publications =>
                                                publications.content,
                                        )}
                                        vertical
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </Accordion>
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

export default News
