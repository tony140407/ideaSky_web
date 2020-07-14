<template>
  <ul>
    <li class="nav-item">
      <a
        class="nav-link active"
        href="{% url 'user_profile:dashboard' %}"
        data-toggle="tooltip"
        data-placement="right"
        title="Dashboard"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-dashboard"
        >
          <path d="M3 3 V3 18 C 10 10 20 30 3,3" />
        </svg>
        <span class="sr-only">(current)</span>
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="{% url 'user_profile:device_info' %}"
        data-toggle="tooltip"
        data-placement="right"
        title="Device Info"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-file"
        >
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13 2 13 9 20 9" />
        </svg>
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="{% url 'user_profile:monitor' %}"
        data-toggle="tooltip"
        data-placement="right"
        title="Monitor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-monitor"
        >
          <path d="M12 9 H3 V21 H21 V9 H12 L3 3 M12 9 L21 3" />
        </svg>
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="{% url 'user_profile:file_uploader' %}"
        data-toggle="tooltip"
        data-placement="right"
        title="File Uploader"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-file"
        >
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13 2 13 9 20 9" />
        </svg>
      </a>
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        href="{% url 'user_profile:stats' %}"
        data-toggle="tooltip"
        data-placement="right"
        title="Stats"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bar-chart-2"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      </a>
    </li>
  </ul>
</template>
<style scoped>
a {
  color: #007bff;
}
</style>