import { useRouter } from 'next/router'
import Link from 'next/link'

import Dropdown from '@/components/Dropdown'
import DropdownLink, { DropdownItems, DropdownItems3 } from '@/components/DropdownLink'
import Logo from '@/components/Logo'

import { useAuth } from '@/hooks/auth'
import classNames from 'classnames'

import useWindowDimensions from '@/hooks/useWindowDimension'
import {
    ArrowTopRightOnSquareIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline'
import users from '../../pages/dashboard/resources/bio.json'

const Navigation = ({ user, open, setOpen }) => {
    const router = useRouter()

    const { logout } = useAuth()
    const { width } = useWindowDimensions()


    const emails = users.map(item => item.email)
    return (
        <nav className="fixed bg-black w-full z-[9999]">
            {/* Primary Navigation Menu */}
            <div className="mx-auto pr-4 sm:pr-6 lg:pr-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center lg:px-5 h-16 bg-black">
                        <div
                            className={classNames(
                                'mr-2 items-center lg:hidden flex h-full w-16 justify-center',
                                width < 1024 && open
                                    ? 'bg-dark-grey'
                                    : 'bg-black',
                            )}>
                            <button
                                onClick={() => setOpen(open => !open)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-light-grey focus:outline-none transition duration-150 ease-in-out">
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    {open ? (
                                        <path
                                            className="inline-flex"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            className="inline-flex"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                        <Link href="/dashboard">
                            <Logo className="block w-auto fill-current text-white lg:text-[24px] text-base" />
                        </Link>
                    </div>
                    <div />
                    {/* Settings Dropdown */}
                    <div className="flex items-center sm:ml-6 select-none">
                        <Dropdown
                            align="right"
                            width="64"
                            trigger={
                                <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-white sm:text-[14px] text-2xl sm:leading-[14px]">
                                            {user?.name}
                                        </p>
                                        <p className="text-gray-400 text-xs mt-1">
                                            My Portal
                                        </p>
                                    </div>

                                    <div className="ml-3">
                                        <div className="rounded-full overflow-hidden w-[40px] h-[40px]">
                                            <img
                                                src={
                                                    emails.includes(user?.email) ? '/images/avatars/' + user.email + '.png' :
                                                        'https://ui-avatars.com/api/?name=' +
                                                        user?.name
                                                }
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </button>
                            }>
                            {/* Authentication */}
                            <DropdownLink href="https://www.myisolved.com/UserLogin.aspx?ReturnUrl=%2f" target="_blank" >
                                <div className="flex justify-between gap-4">
                                    <div className="flex flex-col">
                                        <div className="font-bold sm:text-[18px] text-2xl sm:leading-[18px]">
                                            iSolved
                                        </div>
                                        <div className="text-lg sm:text-[14px] leading-none italic mt-1">
                                            HR and Payroll Information Platform
                                        </div>
                                    </div>
                                    <ArrowTopRightOnSquareIcon className="text-gray-500 sm:w-4 sm:h-4 h-8 h-8 sm:min-w-[16px] min-w-[32px] mt-1" />
                                </div>
                            </DropdownLink>
                            <DropdownLink href="https://www.veeva.com/" target="_blank" >
                                <div className="flex justify-between gap-4">
                                    <div className="flex flex-col">
                                        <div className="font-bold sm:text-[18px] text-2xl sm:leading-[18px]">
                                            Veeva
                                        </div>
                                        <div className="text-lg sm:text-[14px] leading-none italic mt-1">
                                            System for regulatory submissions
                                        </div>
                                    </div>
                                    <ArrowTopRightOnSquareIcon className="text-gray-500 sm:w-4 sm:h-4 h-8 h-8 sm:min-w-[16px] min-w-[32px] mt-1" />
                                </div>
                            </DropdownLink>
                            <DropdownLink href="https://www.concursolutions.com" target="_blank" >
                                <div className="flex justify-between gap-4">
                                    <div className="flex flex-col">
                                        <div className="font-bold sm:text-[18px] text-2xl sm:leading-[18px]">
                                            Concur / WorldMobile
                                        </div>
                                        <div className="text-lg sm:text-[14px] leading-none italic mt-1">
                                            Business travel booking
                                        </div>
                                    </div>
                                    <ArrowTopRightOnSquareIcon className="text-gray-500 sm:w-4 sm:h-4 h-8 h-8 sm:min-w-[16px] min-w-[32px] mt-1" />
                                </div>
                            </DropdownLink>
                            <DropdownLink href="https://www.compliancewire.com/CW3/Standard/Authentication/LogIn" target="_blank" >
                                <div className="flex justify-between gap-4">
                                    <div className="flex flex-col">
                                        <div className="font-bold sm:text-[18px] text-2xl sm:leading-[18px]">
                                            ComplianceWire
                                        </div>
                                        <div className="text-lg sm:text-[14px] leading-none italic mt-1">
                                            Compliance and qualification management system
                                        </div>
                                    </div>
                                    <ArrowTopRightOnSquareIcon className="text-gray-500 sm:w-4 sm:h-4 h-8 h-8 sm:min-w-[16px] min-w-[32px] mt-1" />
                                </div>
                            </DropdownLink>
                            {/* <DropdownItems
                                title="Employee Suite"
                                font="sm:text-[18px] text-2xl sm:leading-[18px] font-bold"
                                items={[
                                    {
                                        title: 'Insurance', type: 'dropdown', items: [
                                            { title: 'Insurance Benefit Summary Plan Document (SPD)', type: 'item', download: '/downloads/employee_suite/AFA CPOSII Premier 500 100 50 CY V23 SG Summary Of Benefit Coverage.pdf' },
                                            { title: 'Dental', type: 'item', download: '/downloads/employee_suite/962645Dental(12) 10.1.2023.pdf' },
                                            { title: 'Vision', type: 'item', download: '/downloads/employee_suite/962645Vision(12) 10.1.2023.pdf' },
                                            { title: 'Basic Life Insurance', type: 'item', download: '/downloads/employee_suite/962645BasicLife10.1.2023.pdf' },
                                            { title: 'Long-Term Disability', type: 'item', download: '/downloads/employee_suite/962645LongTermDisability10.1.2023.pdf' },
                                            { title: 'Short-Term Disability', type: 'item', download: '/downloads/employee_suite/962645ShortTermDisability10.1.2023.pdf' }
                                        ]
                                    },
                                    { title: 'Benefits Guide', type: 'item', download: '/downloads/employee_suite/Metsera Benefit Guide.pdf' },
                                    { title: 'payroll schedule', type: 'item', download: '/downloads/employee_suite/2024 US Payroll Calendar_01.pdf' },
                                ]}
                                placeholder="About your benefits, insurance policies, and payroll schedule"
                            /> */}

                            <DropdownItems
                                title="Travel & Expense"
                                font="sm:font-bold sm:text-[18px] text-2xl sm:leading-[18px]"

                                items={[
                                    {
                                        title: 'Travel & Expense Form',
                                        type: 'item',
                                        download: '/downloads/travel_expense/Metsera_Expense_Reimbursement_Form_240523_01.xlsx'
                                    },
                                    {
                                        title: 'Travel & Expense Policy',
                                        type: 'item',
                                        download: '/downloads/travel_expense/Metsera_TravelExpense_Policy_240419_FINAL.pdf'
                                    }
                                ]}
                                placeholder="Business expense reimbursement"
                            />

                            <DropdownItems3
                                title="Employee Suite"
                                font="sm:text-[18px] text-2xl sm:leading-[18px] font-bold"

                                items={[
                                    {
                                        title: 'Payroll Schedule',
                                        type: 'dropdown',
                                        items: [
                                            {
                                                title: 'US',
                                                type: 'item',
                                                download: '/downloads/employee_suite/2024 US Payroll Calendar_01.pdf',
                                                downloadable: true,
                                            },
                                            {
                                                title: 'UK',
                                                type: 'item',
                                                download: '/downloads/employee_suite/2024 UK Payroll Calendar_01.pdf',
                                                downloadable: true,
                                            }
                                        ]
                                    },
                                    {
                                        title: 'Benefits (US)',
                                        type: 'dropdown',
                                        items: [
                                            {
                                                title: 'Benefit Guide',
                                                type: 'item',
                                                download: '/downloads/employee_suite/MetseraBenefitGuide.pdf',
                                                downloadable: true,
                                                
                                            },
                                            {
                                                title: 'How to Access Benefits',
                                                type: 'dropdown',
                                                items: [
                                                    {
                                                        title: 'Create your Aetna account',
                                                        type: 'item',
                                                        download: '/downloads/employee_suite/Aetna Member Value Added Programs_SG_AFA_9.1.23.pdf'
                                                    },
                                                    {
                                                        title: 'Create your SunLife account',
                                                        type: 'item',
                                                        download: '/downloads/employee_suite/CreateSunLifeAccount.pdf'
                                                    }
                                                ]
                                            },
                                            {
                                                title: 'Benefits Plan Summaries',
                                                type: 'dropdown',
                                                items: [
                                                    {
                                                        title: 'Medical',
                                                        type: 'item',
                                                        download: '/downloads/employee_suite/AFA CPOSII Premier 500 100 50 CY V23 SG Summary Of Benefit Coverage.pdf'
                                                    },
                                                    {
                                                        title: 'Dental',
                                                        type: 'item',
                                                        download: '/downloads/employee_suite/962645Dental(12) 10.1.2023.pdf'
                                                    },
                                                    {
                                                        title: 'Vision',
                                                        type: 'item',
                                                        download: '/downloads/employee_suite/962645Vision(12) 10.1.2023.pdf'
                                                    },
                                                    {
                                                        title: 'Short Disability',
                                                        type: 'item',
                                                        download: '/downloads/employee_suite/962645ShortTermDisability10.1.2023.pdf'
                                                    },
                                                    {
                                                        title: 'Long Term Disability',
                                                        type: 'item',
                                                        download: '/downloads/employee_suite/962645LongTermDisability10.1.2023.pdf'
                                                    },
                                                    {
                                                        title: 'Life Insurance / AD&D',
                                                        type: 'item',
                                                        download: '/downloads/employee_suite/962645BasicLife10.1.2023.pdf'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]}
                                placeholder="About your benefits and payroll schedule"
                            />

                            
                        </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
