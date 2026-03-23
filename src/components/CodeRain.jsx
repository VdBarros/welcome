import { useState, useEffect } from 'react';

const CodeRain = () => {
  const [columns, setColumns] = useState([])
  const codeSnippets = [
    'fun main() {}', 'SwiftUI', 'Flutter', 'Kotlin', 'React Native',
    'val data =', 'class App', 'import', 'export', 'func', 'async',
    '@Composable', 'struct', 'View()', 'var =', 'const', 'let x =',
    'override', 'suspend', 'Flow', 'Channel', 'Actor'
  ]

  useEffect(() => {
    const cols = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${(i / 30) * 100}%`,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10,
      content: Array.from({ length: 30 }, () =>
        codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      ).join('\n')
    }))
    setColumns(cols)
  }, [])

  return (
    <div className="code-rain">
      {columns.map(col => (
        <div
          key={col.id}
          className="code-column"
          style={{
            left: col.left,
            animationDuration: `${col.duration}s`,
            animationDelay: `${col.delay}s`
          }}
        >
          {col.content}
        </div>
      ))}
    </div>
  )
}

export default CodeRain;
