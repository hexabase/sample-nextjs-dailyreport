/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/zNFXQdTSJTF
 */


export function ReportComponent() {
  return (
    <div className="grid max-w-3xl gap-4 px-4 mx-auto">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Daily Report</h1>
        <div className="flex items-center gap-1 text-sm">
          <CalendarIcon className="w-4 h-4" />
          <span>Today</span>
        </div>
      </div>
      <div className="grid gap-2">
        <div className="grid gap-1 text-sm prose prose-sm prose-p:sm">
          <p>
            I've been making progress on the new feature we're developing. The code is coming along nicely, and I've
            been able to address a few of the initial issues we encountered.
          </p>
          <p>
            I've also been coordinating with the design team to ensure that the user interface is both functional and
            visually appealing. We've had some productive discussions, and I believe we're on track to deliver an
            excellent user experience.
          </p>
          <p>
            Overall, I'm feeling positive about our progress, and I'm confident that we'll be able to meet our
            deadlines. I'm looking forward to seeing the feature come together in the coming days.
          </p>
        </div>
      </div>
      <div className="grid gap-1 text-xs">
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4 h-4" />
          <span>Today</span>
        </div>
        <div className="flex items-center gap-1">
          <UserIcon className="w-4 h-4" />
          <span>You</span>
        </div>
      </div>
    </div>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
