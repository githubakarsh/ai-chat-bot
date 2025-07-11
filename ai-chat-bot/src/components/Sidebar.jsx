import './Sidebar.css'

function Sidebar({ isExpanded }) {
  const options = ['Editor', 'Console', 'Settings', 'Help']
  return (
    <aside className={isExpanded ? 'sidebar expanded' : 'sidebar collapsed'}>
      <ul>
        {options.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
