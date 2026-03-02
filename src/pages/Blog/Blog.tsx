import { blogPosts } from '../../data/blog'
import styles from './Blog.module.css'

export default function Blog() {
  return (
    <div className={styles.blogPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <div className="section-label">Insights & Resources</div>
          <h2 className="section-title">From the Blog</h2>
          <p className="section-subtitle">Practical insights on leadership, business systems, workforce development, and organizational growth.</p>
        </div>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <div key={post.title} className={styles.blogCard}>
              <div className={styles.blogThumb} style={post.bgStyle ? { background: post.bgStyle } : undefined}>
                <span className={styles.blogCategory}>{post.category}</span>
              </div>
              <div className={styles.blogBody}>
                <div className={styles.blogMeta}>{post.date} · {post.readTime}</div>
                <h3><a>{post.title}</a></h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
