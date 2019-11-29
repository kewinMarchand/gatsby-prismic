export const linkResolver = (doc) => {
    // URL for a annexe type
    if (doc.type === 'annexe') {
      return `/annexe/${doc.id}`
    }
    // URL for a article type
    if (doc.type === 'article') {
      return `/article/${doc.id}`
    }
    // URL for a page type
    if (doc.type === 'page') {
      return `/${doc.uid}`
    }
    // Backup for all other types
    return '/'
}