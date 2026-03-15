import DefaultTheme from 'vitepress/theme'
import { h, defineComponent, onMounted, onUnmounted } from 'vue'
import './style.css'

/**
 * Exclusive accordion: opening one sidebar group closes all others.
 */
function useSidebarAccordion() {
  let cleanup: (() => void) | null = null

  onMounted(() => {
    const sidebar = document.querySelector('.VPSidebar')
    if (!sidebar) return

    const handler = (e: Event) => {
      const target = e.target as HTMLElement
      // Only act on level-0 section header clicks (the caret / text area)
      const item = target.closest('.VPSidebarItem.level-0 > .item')
      if (!item) return

      const clickedGroup = item.closest('.VPSidebarItem.level-0')
      if (!clickedGroup) return

      // Check if this group is currently collapsed (will be expanded after click)
      const isCollapsed = clickedGroup.classList.contains('collapsed')
      if (!isCollapsed) return // closing an open section — do nothing

      // After Vue processes the click, collapse all other sections
      requestAnimationFrame(() => {
        const allGroups = sidebar.querySelectorAll(':scope .VPSidebarItem.level-0')
        allGroups.forEach(group => {
          if (group === clickedGroup) return
          // Only collapse groups that have items (not direct links like Marketplace)
          if (!group.querySelector('.items')) return
          if (!group.classList.contains('collapsed')) {
            // Simulate a click on the caret to collapse it via VitePress internals
            const caret = group.querySelector(':scope > .item .caret') as HTMLElement
            if (caret) caret.click()
          }
        })
      })
    }

    sidebar.addEventListener('click', handler, true)
    cleanup = () => sidebar.removeEventListener('click', handler, true)
  })

  onUnmounted(() => {
    cleanup?.()
  })
}

const CustomLayout = defineComponent({
  setup() {
    useSidebarAccordion()

    return () => {
      const slots: Record<string, () => any> = {
        'nav-bar-content-after': () => h('nav', { class: 'nav-custom-right' }, [
          h('span', { class: 'nav-separator' }, '|'),
          h('a', {
            href: 'https://cloud.vinkius.com',
            target: '_blank',
            rel: 'noopener noreferrer',
            class: 'nav-badge-cloud'
          }, 'Open Vinkius Cloud'),
          h('span', { class: 'nav-separator' }, '|'),
          h('a', {
            href: 'https://github.com/vinkius-labs/vinkius-mcp-servers',
            target: '_blank',
            rel: 'noopener noreferrer',
            class: 'nav-github-link'
          }, [
            h('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '16',
              height: '16',
              viewBox: '0 0 24 24',
              fill: 'currentColor',
              class: 'nav-github-icon'
            }, [
              h('path', {
                d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                })
            ]),
            ' Star on GitHub'
          ])
        ])
      }

      return h(DefaultTheme.Layout, null, slots)
    }
  }
})

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
}
