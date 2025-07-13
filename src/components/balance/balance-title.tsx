import UserShieldIcon from '@/assets/icons/user-sheild.png'

export default function BalanceTitle() {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-xl font-bold">Mohamd Ben Chikh's<span>balance</span></h2>
      <img className="size-6" src={UserShieldIcon} alt="" />
    </div>
  )
}
