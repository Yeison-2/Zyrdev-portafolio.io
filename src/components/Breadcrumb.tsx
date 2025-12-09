import { Home, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Navegación de ruta" className="mb-6">
      <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a 
            itemProp="item"
            href="/" 
            className="flex items-center gap-1 hover:text-primary transition-colors"
            aria-label="Inicio"
          >
            <Home size={14} aria-hidden="true" />
            <span itemProp="name">Inicio</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>
        
        {items.map((item, index) => (
          <li 
            key={index}
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
            className="flex items-center gap-2"
          >
            <ChevronRight size={14} aria-hidden="true" className="text-muted-foreground/50" />
            {index === items.length - 1 ? (
              <span itemProp="name" className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a 
                itemProp="item"
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                <span itemProp="name">{item.label}</span>
              </a>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
