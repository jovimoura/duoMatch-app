import { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  items: any[]
}

export function Select(rest: SelectProps) {
  return (
    <select
      {...rest}
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none"
    >
      <option disabled selected value="">
        Selecione o game que deseja jogar
      </option>
      {rest.items.map(item => (
        <option key={item.id} value={item.id}>
          {item.title}
        </option>
      ))}
    </select>
  )
}
